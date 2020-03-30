import { combine, get } from '@typed/effects'
import { debug, error } from '@typed/logger'
import { fromJust, isNothing, Just, Maybe, Nothing } from '@typed/maybe'
import { EncryptedKeyPair, EncryptionEffects, EncryptionEnv } from '../../../common'
import { importEncryptedKeys } from '../../../effects'
import { createKey } from './createKey'
import { orCryptoFailure } from './orCryptoFailure'

export function* getSavedEncryptedKeyPair(
  aesKey: CryptoKey,
  keyPrefix: string,
): EncryptionEffects<unknown, Maybe<EncryptedKeyPair>> {
  yield* debug(`Getting Saved Encryption Keys...`)
  const { aesStorageKeys, aesEncryptedKeyStorage } = yield* get<EncryptionEnv>()
  const [maybePublicKey, maybePrivateKey] = yield* combine(
    orCryptoFailure(aesEncryptedKeyStorage.getItem(createKey(keyPrefix, aesStorageKeys.publicKey))),
    orCryptoFailure(
      aesEncryptedKeyStorage.getItem(createKey(keyPrefix, aesStorageKeys.privateKey)),
    ),
  )

  if (isNothing(maybePublicKey) || isNothing(maybePrivateKey)) {
    yield* error(`Unable to find Saved Encryption Keys.`)

    return Nothing
  }

  const publicKey = fromJust(maybePublicKey)
  const privateKey = fromJust(maybePrivateKey)
  const cryptoKeyPair = yield* importEncryptedKeys(aesKey, {
    publicKey,
    privateKey,
  })

  yield* debug(`Found Saved Encryption Keys!`)

  return Just.of({
    ...cryptoKeyPair,
    encrypted: {
      publicKey,
      privateKey,
    },
  })
}
