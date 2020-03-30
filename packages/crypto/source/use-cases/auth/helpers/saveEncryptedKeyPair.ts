import { combine, get } from '@typed/effects'
import { debug } from '@typed/logger'
import { EncryptedKeyPair, EncryptionEffects, EncryptionEnv } from '../../../common'
import { createKey } from './createKey'
import { orCryptoFailure } from './orCryptoFailure'

export function* saveEncryptedKeyPair(
  keyPrefix: string,
  encryptedKeyPair: EncryptedKeyPair,
): EncryptionEffects<unknown, void> {
  yield* debug(`Saving EncryptedKeyPair...`)

  const { aesStorageKeys, aesEncryptedKeyStorage } = yield* get<EncryptionEnv>()

  yield* combine(
    orCryptoFailure(
      aesEncryptedKeyStorage.setItem(
        createKey(keyPrefix, aesStorageKeys.publicKey),
        encryptedKeyPair.encrypted.publicKey,
      ),
    ),
    orCryptoFailure(
      aesEncryptedKeyStorage.setItem(
        createKey(keyPrefix, aesStorageKeys.privateKey),
        encryptedKeyPair.encrypted.privateKey,
      ),
    ),
  )

  yield* debug(`Saved EncryptedKeyPair.`)
}
