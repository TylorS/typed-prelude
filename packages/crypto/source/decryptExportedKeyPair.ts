import { Effect } from '@typed/effects'
import { chain, Either, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { decrypt } from './effects'
import { ExportedKeyPair } from './exportKeyPair'

export function* decryptExportedKeyPair(
  symmetricKey: CryptoKey,
  keyPair: ExportedKeyPair,
): Effect<CryptoEnv, Either<Error, ExportedKeyPair>> {
  const errorOrDecryptedPublicKey = yield* decrypt(
    symmetricKey.algorithm,
    symmetricKey,
    keyPair.publicKey,
  )
  const errorOrDecryptedPrivateKey = yield* decrypt(
    symmetricKey.algorithm,
    symmetricKey,
    keyPair.privateKey,
  )

  return chain(
    publicKey =>
      map(privateKey => ({ publicKey, privateKey } as const), errorOrDecryptedPrivateKey),
    errorOrDecryptedPublicKey,
  )
}
