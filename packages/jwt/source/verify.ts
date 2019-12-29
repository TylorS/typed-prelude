import { base64UrlDecode } from './base64UrlDecode'
import { getClaims } from './getClaims'
import { getHeader } from './getHeader'
import { getSignature } from './getSignature'
import { getToken } from './getToken'
import { hmacSha256 } from './hmacSha256'
import { isActive } from './isActive'
import { Jwt } from './Jwt'

export type VerificationOptions = {
  readonly issuer?: string
  readonly audience?: string
  readonly subject?: string
  readonly crypto?: Crypto
}

const supportedAlgorithms = ['HS256']
const validTypes = ['JWT']

export async function verify(
  jwt: Jwt,
  secret: string | CryptoKey, // CryptoKey only works in browser or with options.crypto provided
  options: VerificationOptions = {},
): Promise<boolean> {
  const header = getHeader(jwt)

  if (
    !validTypes.includes(header.typ as string) ||
    !supportedAlgorithms.includes(header.alg?.toString() ?? '')
  ) {
    return false
  }

  const signature = base64UrlDecode(await hmacSha256(getToken(jwt), secret, options.crypto))

  if (getSignature(jwt) !== signature) {
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
