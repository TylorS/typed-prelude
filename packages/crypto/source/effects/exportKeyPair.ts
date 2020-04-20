import { CryptoEffects, JsonWebKeyPair } from '../common'
import { exportKey } from './subtle'
import { combine } from '@typed/effects/source'

export function* exportKeyPair(keyPair: CryptoKeyPair): CryptoEffects<unknown, JsonWebKeyPair> {
  const [publicKey, privateKey] = yield* combine(
    exportKey('jwk', keyPair.publicKey),
    exportKey('jwk', keyPair.privateKey),
  )

  return {
    publicKey,
    privateKey,
  } as const
}
