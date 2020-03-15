import { Effect } from '@typed/effects/source'
import { chain, Either, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { encrypt } from './effects'
import { ExportedKeyPair } from './exportKeyPair'

export function* encryptExportedKeyPair(
  symmetricKey: CryptoKey,
  keyPair: ExportedKeyPair,
): Effect<CryptoEnv, Either<Error, ExportedKeyPair>> {
  const encryptedPublicKey = yield* encrypt(symmetricKey.algorithm, symmetricKey, keyPair.publicKey)
  const encryptedPrivateKey = yield* encrypt(
    symmetricKey.algorithm,
    symmetricKey,
    keyPair.privateKey,
  )

  return chain(
    publicKey => map(privateKey => ({ publicKey, privateKey } as const), encryptedPrivateKey),
    encryptedPublicKey,
  )
}
