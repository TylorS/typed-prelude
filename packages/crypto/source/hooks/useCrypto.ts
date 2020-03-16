import { AsyncStorage } from '@typed/asyncstorage'
import { combine, PureEffect, runEffects } from '@typed/effects'
import { Either, fromRight, isLeft, isRight, Left, Right } from '@typed/either'
import { InitialState, useEffect, useState } from '@typed/hooks'
import { chain, fromJust, isJust, isNothing, Just, map, Maybe } from '@typed/maybe'
import { Nothing } from '../../../maybe/source'
import { changePassword, ChangePasswordOptions } from '../changePassword'
import { decryptEncryptedKeys } from '../decryptEncryptedKeys'
import { deriveAesKey, DeriveAesKeyOptions } from '../deriveAesKey'
import { generateEncryptedKeyPair } from '../generateEncryptedKeyPair'
import { importExportedKeyPair } from '../importExportedKeyPair'
import { AesEncryptedData, AesEncryptedKeys, EncryptedKeyPair } from '../types'

export type UseCryptoOptions = {
  readonly encryptionKeyStorage: AesEncryptedKeysStorage
}

export type AesEncryptedKeysStorage = AsyncStorage<AesEncryptedData>

export const AES_ENCRYPTED_PUBLIC_KEY = `publicKey`
export const AES_ENCRYPTED_PRIVATE_KEY = `privateKey`

const isMaybeRight = <A, B>(maybeEither: Maybe<Either<A, B>>): maybeEither is Just<Right<B>> =>
  isJust(maybeEither) && isRight(fromJust(maybeEither))

export function* useCrypto({ encryptionKeyStorage }: UseCryptoOptions) {
  const [getAesCryptoKey, updateAesCryptoKey] = yield* useState(
    InitialState.of<Maybe<Either<Error, CryptoKey>>>(Nothing),
  )
  const [getAesEncryptedKeys, updateAesEncryptedKeys] = yield* useState(() =>
    retrieveAesEncryptedKeys(encryptionKeyStorage),
  )
  const [getRsaCryptoKeyPair, updateRsaCryptoKeyPair] = yield* useState(
    InitialState.of<Maybe<Either<Error, CryptoKeyPair>>>(Nothing),
  )
  const [getSalt, updateSalt] = yield* useState(InitialState.of(''))
  const [getPassword, updatePassword] = yield* useState(InitialState.of(''))
  const aesCryptoKey = yield* getAesCryptoKey()
  const aesEncryptedKeys = yield* getAesEncryptedKeys()
  const rsaCryptoKeyPair = yield* getRsaCryptoKeyPair()

  yield* useEffect((a, b) => runEffects(tryToDecryptEncryptedKeys(a, b), yield* get<CryptoEnv>()), [
    aesCryptoKey,
    aesEncryptedKeys,
  ] as const)

  function* tryToDecryptEncryptedKeys(
    maybeAesCryptoKey: Maybe<Either<Error, CryptoKey>>,
    maybeAesEncryptedKeys: Maybe<Either<Error, AesEncryptedKeys>>,
  ) {
    if (!isMaybeRight(maybeAesCryptoKey) || !isMaybeRight(maybeAesEncryptedKeys)) {
      return
    }

    const aesCryptoKey = fromRight(fromJust(maybeAesCryptoKey))
    const aesEncryptedKeys = fromRight(fromJust(maybeAesEncryptedKeys))
    const errorOrDecryptedAesKeys = yield* decryptEncryptedKeys(aesCryptoKey, aesEncryptedKeys)

    if (isLeft(errorOrDecryptedAesKeys)) {
      yield* updateRsaCryptoKeyPair(() => Maybe.of(errorOrDecryptedAesKeys))

      return
    }

    const errorOrKeyPair = yield* importExportedKeyPair(fromRight(errorOrDecryptedAesKeys))

    yield* updateRsaCryptoKeyPair(() => Maybe.of(errorOrKeyPair))
  }

  function* handleNewEncryptedKeyPair(errorOrEncryptedKeyPair: Either<Error, EncryptedKeyPair>) {
    if (isLeft(errorOrEncryptedKeyPair)) {
      yield* updateAesEncryptedKeys(() => Nothing)
      yield* updateRsaCryptoKeyPair(() => Nothing)

      return errorOrEncryptedKeyPair
    }

    const encryptedKeyPair = fromRight(errorOrEncryptedKeyPair)

    yield* updateAesEncryptedKeys(() => Maybe.of(Right.of(encryptedKeyPair.encrypted)))
    yield* updateRsaCryptoKeyPair(() => Maybe.of(Right.of(encryptedKeyPair)))

    return errorOrEncryptedKeyPair
  }

  function* signUp(options: DeriveAesKeyOptions) {
    const errorOrAesKey = yield* deriveAesKey(options)

    if (isLeft(errorOrAesKey)) {
      yield* updateAesCryptoKey(() => Maybe.of(errorOrAesKey))

      return errorOrAesKey
    }

    const errorOrEncryptedKeyPair = yield* generateEncryptedKeyPair(fromRight(errorOrAesKey))

    return yield* handleNewEncryptedKeyPair(errorOrEncryptedKeyPair)
  }

  function* signIn(options: DeriveAesKeyOptions) {
    const errorOrAesKey = yield* deriveAesKey(options)

    yield* updateAesCryptoKey(() => Maybe.of(errorOrAesKey))

    return errorOrAesKey
  }

  function* changeUserPassword(options: Omit<ChangePasswordOptions, 'encryptedKeys'>) {
    const maybeEncryptedKeys = yield* getAesEncryptedKeys()

    if (isNothing(maybeEncryptedKeys)) {
      return Left.of(new Error(`Encrypted Keys not found`))
    }

    const errorOrEncryptedKeys = fromJust(maybeEncryptedKeys)

    if (isLeft(errorOrEncryptedKeys)) {
      return errorOrEncryptedKeys
    }

    const errorOrEncryptedKeyPair = yield* changePassword({
      ...options,
      encryptedKeys: fromRight(errorOrEncryptedKeys),
    })

    return yield* handleNewEncryptedKeyPair(errorOrEncryptedKeyPair)
  }

  function* signOut() {
    yield* updateAesCryptoKey(() => Nothing)
  }

  return {
    aesCryptoKey,
    aesEncryptedKeys,
    rsaCryptoKeyPair,
    salt: yield* getSalt(),
    password: yield* getPassword(),
    updateSalt,
    updatePassword,
    signIn,
    signOut,
    signUp,
    changePassword: changeUserPassword,
  } as const
}

function* retrieveAesEncryptedKeys(
  storage: AesEncryptedKeysStorage,
): PureEffect<Maybe<Either<Error, AesEncryptedKeys>>> {
  const [errorOrPublicKey, errorOrPrivateKey] = yield* combine(
    storage.getItem(AES_ENCRYPTED_PUBLIC_KEY),
    storage.getItem(AES_ENCRYPTED_PRIVATE_KEY),
  )

  if (isLeft(errorOrPublicKey)) {
    return Maybe.of(errorOrPublicKey)
  }

  if (isLeft(errorOrPrivateKey)) {
    return Maybe.of(errorOrPrivateKey)
  }

  const maybeAesEncryptedKeys = chain(
    publicKey =>
      map(
        (privateKey): AesEncryptedKeys => ({ publicKey, privateKey }),
        fromRight(errorOrPrivateKey),
      ),
    fromRight(errorOrPublicKey),
  )

  return map(Right.of, maybeAesEncryptedKeys)
}
