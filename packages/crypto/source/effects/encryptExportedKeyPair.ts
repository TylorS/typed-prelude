import { AesEncryptedKeys, CryptoEffects, ExportedKeyPair } from '../common'
import { encryptWithAesKey } from '../symmetrical'

export function* encryptExportedKeyPair(
  aesKey: CryptoKey,
  keyPair: ExportedKeyPair,
): CryptoEffects<unknown, AesEncryptedKeys> {
  const publicKey = yield* encryptWithAesKey(aesKey, keyPair.publicKey)
  const privateKey = yield* encryptWithAesKey(aesKey, keyPair.privateKey)

  return {
    publicKey,
    privateKey,
  } as const
}
