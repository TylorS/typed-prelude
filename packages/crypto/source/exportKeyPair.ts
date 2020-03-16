import { Effect } from '@typed/effects'
import { chain, Either, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { exportKey } from './effects'
import { ExportedKeyPair } from './types'

export function* exportKeyPair({
  publicKey,
  privateKey,
}: CryptoKeyPair): Effect<CryptoEnv, Either<Error, ExportedKeyPair>> {
  const errorOrPublicKey = yield* exportKey('raw', publicKey)
  const errorOrPrivateKey = yield* exportKey('raw', privateKey)

  return chain(
    publicKey => map(privateKey => ({ publicKey, privateKey } as const), errorOrPrivateKey),
    errorOrPublicKey,
  )
}
