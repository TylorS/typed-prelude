import { Effect } from '@typed/effects'
import { chain, Either, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { decryptWithAesKey } from './decryptWithAesKey'
import { AesEncryptedKeys, ExportedKeyPair } from './types'

export function* decryptEncryptedKeys(
  aesKey: CryptoKey,
  keyPair: AesEncryptedKeys,
): Effect<CryptoEnv, Either<Error, ExportedKeyPair>> {
  const errorOrDecryptedPublicKey = yield* decryptWithAesKey(aesKey, ...keyPair.publicKey)
  const errorOrDecryptedPrivateKey = yield* decryptWithAesKey(aesKey, ...keyPair.privateKey)

  return chain(
    publicKey =>
      map(privateKey => ({ publicKey, privateKey } as const), errorOrDecryptedPrivateKey),
    errorOrDecryptedPublicKey,
  )
}
