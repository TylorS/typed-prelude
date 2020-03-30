import { combine } from '@typed/effects'
import { importExportedKeyPair } from '../asymmetrical/importExportedRsaKeyPair'
import { AesEncryptedKeys, CryptoEffects } from '../common'
import { decryptWithAesKey } from '../symmetrical/decryptWithAesKey'

export function* importEncryptedKeys(
  decryptionKey: CryptoKey,
  encryptedKeys: AesEncryptedKeys,
): CryptoEffects<unknown, CryptoKeyPair> {
  const [publicKey, privateKey] = yield* combine(
    decryptWithAesKey(decryptionKey, ...encryptedKeys.publicKey),
    decryptWithAesKey(decryptionKey, ...encryptedKeys.privateKey),
  )

  return yield* importExportedKeyPair({
    publicKey,
    privateKey,
  })
}
