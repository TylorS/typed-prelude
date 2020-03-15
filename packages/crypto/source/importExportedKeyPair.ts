import { Effect } from '@typed/effects'
import { chain, Either, map } from '@typed/either'
import { HASH } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { importKey } from './effects'
import { ExportedKeyPair } from './exportKeyPair'

export function* importExportedKeyPair(
  keyPair: ExportedKeyPair,
): Effect<CryptoEnv, Either<Error, CryptoKeyPair>> {
  const params = {
    name: 'RSA-OAEP',
    hash: HASH,
  }
  const nonExtractablePublicKey = yield* importKey('raw', keyPair.publicKey, params, false, [
    'encrypt',
  ])
  const nonExtractablePrivateKey = yield* importKey('raw', keyPair.privateKey, params, false, [
    'decrypt',
  ])

  return chain(
    publicKey => map(privateKey => ({ publicKey, privateKey }), nonExtractablePrivateKey),
    nonExtractablePublicKey,
  )
}
