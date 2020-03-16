import { combine, Effect } from '@typed/effects'
import { Either, fromRight, isLeft } from '@typed/either/source'
import { CryptoEnv } from './CryptoEnv'
import { decryptWithAesKey } from './decryptWithAesKey'
import { importExportedKeyPair } from './importExportedKeyPair'
import { AesEncryptedKeys } from './types'

export function* importAesEncryptedKeys(
  aesKey: CryptoKey,
  encryptedKeys: AesEncryptedKeys,
): Effect<CryptoEnv, Either<Error, CryptoKeyPair>> {
  const [errorOrPublicKey, errorOrPrivateKey] = yield* combine(
    decryptWithAesKey(aesKey, ...encryptedKeys.publicKey),
    decryptWithAesKey(aesKey, ...encryptedKeys.privateKey),
  )

  if (isLeft(errorOrPublicKey)) {
    return errorOrPublicKey
  }

  if (isLeft(errorOrPrivateKey)) {
    return errorOrPrivateKey
  }

  return yield* importExportedKeyPair({
    publicKey: fromRight(errorOrPublicKey),
    privateKey: fromRight(errorOrPrivateKey),
  })
}
