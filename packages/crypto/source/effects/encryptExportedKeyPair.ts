import { AesEncryptedKeys, CryptoEffects, ExportedKeyPair } from '../common'
import { encryptWithAesKey } from '../symmetrical/encryptWithAesKey'
import { combine } from '@typed/effects'

export function* encryptExportedKeyPair(
  aesKey: CryptoKey,
  keyPair: ExportedKeyPair,
): CryptoEffects<unknown, AesEncryptedKeys> {
  const [publicKey, privateKey] = yield* combine(
    encryptWithAesKey(aesKey, keyPair.publicKey),
    encryptWithAesKey(aesKey, keyPair.privateKey),
  )

  return {
    publicKey,
    privateKey,
  } as const
}
