import { AesEncryptedKeys, CryptoEffects, ExportedKeyPair } from '../common'
import { decryptWithAesKey } from '../symmetrical/decryptWithAesKey'

export function* decryptEncryptedKeys(
  aesKey: CryptoKey,
  keyPair: AesEncryptedKeys,
): CryptoEffects<unknown, ExportedKeyPair> {
  const publicKey = yield* decryptWithAesKey(aesKey, ...keyPair.publicKey)
  const privateKey = yield* decryptWithAesKey(aesKey, ...keyPair.privateKey)

  return {
    publicKey,
    privateKey,
  } as const
}
