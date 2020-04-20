import { combine } from '@typed/effects/source'
import { CryptoEffects, JsonWebKeyPair } from '../common'
import { exportKey } from './subtle'

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
