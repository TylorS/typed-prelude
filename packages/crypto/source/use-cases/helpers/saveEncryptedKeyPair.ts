import { combine, get } from '@typed/effects'
import { EncryptedKeyPair, EncryptionEffects, EncryptionEnv } from '../../common'
import { orCryptoFailure } from './orCryptoFailure'

export function* saveEncryptedKeyPair(
  encryptedKeyPair: EncryptedKeyPair,
): EncryptionEffects<unknown, void> {
  const { aesStorageKeys, aesEncryptedKeyStorage } = yield* get<EncryptionEnv>()

  yield* combine(
    orCryptoFailure(
      aesEncryptedKeyStorage.setItem(
        aesStorageKeys.publicKey,
        encryptedKeyPair.encrypted.publicKey,
      ),
    ),
    orCryptoFailure(
      aesEncryptedKeyStorage.setItem(
        aesStorageKeys.privateKey,
        encryptedKeyPair.encrypted.privateKey,
      ),
    ),
  )
}
