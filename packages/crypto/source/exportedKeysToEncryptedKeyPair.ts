import { combine, Effect } from '@typed/effects'
import { chain, Either, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { encryptExportedKeyPair } from './encryptExportedKeyPair'
import { importExportedKeyPair } from './importExportedKeyPair'
import { EncryptedKeyPair, ExportedKeyPair } from './types'

export function* exportedKeysToEncryptedKeyPair(
  aesKey: CryptoKey,
  exportedKeys: ExportedKeyPair,
): Effect<CryptoEnv, Either<Error, EncryptedKeyPair>> {
  const [errorOrEncryptedKeys, errorOrNonExtractableKeyPair] = yield* combine(
    encryptExportedKeyPair(aesKey, exportedKeys),
    importExportedKeyPair(exportedKeys),
  )

  return chain(
    encrypted =>
      map(nonExtractable => ({ ...nonExtractable, encrypted }), errorOrNonExtractableKeyPair),
    errorOrEncryptedKeys,
  )
}
