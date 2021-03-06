import { CryptoEffects, stringToArrayBuffer, verifyWithEcdsaKeyPair } from '@typed/crypto'
import { getClaims } from './getClaims'
import { getSignature } from './getSignature'
import { getToken } from './getToken'
import { isActive } from './isActive'
import { Jwt } from './Jwt'

export type VerificationOptions = {
  readonly issuer?: string
  readonly audience?: string
  readonly subject?: string
}

export function* verify(
  jwt: Jwt,
  publicKey: CryptoKey,
  options: VerificationOptions = {},
): CryptoEffects<unknown, boolean> {
  const token = getToken(jwt)
  const tokenBuffer = stringToArrayBuffer(token)
  const signature = getSignature(jwt)
  const signatureBuffer = stringToArrayBuffer(signature)
  const verified = yield* verifyWithEcdsaKeyPair(tokenBuffer, signatureBuffer, publicKey)

  if (!verified) {
    return false
  }

  const claims = getClaims(jwt)

  if (claims.exp && !isActive(jwt)) {
    return false
  }

  if (options.issuer && claims.iss !== options.issuer) {
    return false
  }

  if (options.audience && claims.aud !== options.audience) {
    return false
  }

  if (options.subject && claims.sub !== options.subject) {
    return false
  }

  return true
}
