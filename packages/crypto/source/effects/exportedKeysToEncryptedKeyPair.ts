import { combine } from '@typed/effects'
import { importExportedKeyPair } from '../asymmetrical/importExportedRsaKeyPair'
import { CryptoEffects, EncryptedKeyPair, ExportedKeyPair } from '../common'
import { encryptExportedKeyPair } from './encryptExportedKeyPair'

export function* exportedKeysToEncryptedKeyPair(
  aesKey: CryptoKey,
  params:
    | RsaHashedImportParams
    | EcKeyImportParams
    | HmacImportParams
    | DhImportKeyParams
    | AesKeyAlgorithm,
  exportedKeys: ExportedKeyPair,
): CryptoEffects<unknown, EncryptedKeyPair> {
  const [encrypted, keyPair] = yield* combine(
    encryptExportedKeyPair(aesKey, exportedKeys),
    importExportedKeyPair(params, exportedKeys),
  )

  return {
    ...keyPair,
    encrypted,
  } as const
}
