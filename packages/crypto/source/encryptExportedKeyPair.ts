import { Effect } from '@typed/effects/source'
import { chain, Either, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { encryptWithAesKey } from './encryptWithAesKey'
import { AesEncryptedKeys, ExportedKeyPair } from './types'

export function* encryptExportedKeyPair(
  aesKey: CryptoKey,
  keyPair: ExportedKeyPair,
): Effect<CryptoEnv, Either<Error, AesEncryptedKeys>> {
  const encryptedPublicKey = yield* encryptWithAesKey(aesKey, keyPair.publicKey)
  const encryptedPrivateKey = yield* encryptWithAesKey(aesKey, keyPair.privateKey)

  return chain(
    publicKey => map(privateKey => ({ publicKey, privateKey } as const), encryptedPrivateKey),
    encryptedPublicKey,
  )
}
