import { combine, get } from '@typed/effects'
import { fromJust, isNothing, Just, Maybe, Nothing } from '@typed/maybe'
import { EncryptedKeyPair, EncryptionEffects, EncryptionEnv } from '../../common'
import { importEncryptedKeys } from '../../effects'
import { KEY_SEPARATOR } from './constants'
import { orCryptoFailure } from './orCryptoFailure'

export function* getSavedEncryptedKeyPair(
  aesKey: CryptoKey,
  keyPrefix: string,
): EncryptionEffects<unknown, Maybe<EncryptedKeyPair>> {
  const { aesStorageKeys, aesEncryptedKeyStorage } = yield* get<EncryptionEnv>()
  const [maybePublicKey, maybePrivateKey] = yield* combine(
    orCryptoFailure(
      aesEncryptedKeyStorage.getItem(`${keyPrefix}${KEY_SEPARATOR}${aesStorageKeys.publicKey}`),
    ),
    orCryptoFailure(
      aesEncryptedKeyStorage.getItem(`${keyPrefix}${KEY_SEPARATOR}${aesStorageKeys.privateKey}`),
    ),
  )

  if (isNothing(maybePublicKey) || isNothing(maybePrivateKey)) {
    return Nothing
  }

  const publicKey = fromJust(maybePublicKey)
  const privateKey = fromJust(maybePrivateKey)
  const cryptoKeyPair = yield* importEncryptedKeys(aesKey, {
    publicKey,
    privateKey,
  })

  return Just.of({
    ...cryptoKeyPair,
    encrypted: {
      publicKey,
      privateKey,
    },
  })
}
