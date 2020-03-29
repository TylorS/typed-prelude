import { CryptoEffects, ExportedKeyPair } from '../common'
import { exportKey } from './subtle'

export function* exportKeyPair({
  publicKey,
  privateKey,
}: CryptoKeyPair): CryptoEffects<unknown, ExportedKeyPair> {
  return {
    publicKey: yield* exportKey('raw', publicKey),
    privateKey: yield* exportKey('raw', privateKey),
  } as const
}
