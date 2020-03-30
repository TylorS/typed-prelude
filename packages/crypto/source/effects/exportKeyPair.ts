import { CryptoEffects, JsonWebKeyPair } from '../common'
import { exportKey } from './subtle'

export function* exportKeyPair({
  publicKey,
  privateKey,
}: CryptoKeyPair): CryptoEffects<unknown, JsonWebKeyPair> {
  return {
    publicKey: yield* exportKey('jwk', publicKey),
    privateKey: yield* exportKey('jwk', privateKey),
  } as const
}
