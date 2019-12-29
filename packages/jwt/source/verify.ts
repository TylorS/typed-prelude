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
  readonly crypto?: Crypto

  readonly expirationKey?: string
  readonly notBeforeKey?: string
  readonly issuerKey?: string
}

const supportedAlgorithms = ['HS256']
const validTypes = ['JWT']

export async function verify(
  jwt: Jwt,
  secret: string,
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

  if (claims[options.expirationKey || 'exp'] && !isActive(jwt, options)) {
    return false
  }

  if (options.issuer && claims[options.issuerKey || 'iss'] !== options.issuer) {
    return false
  }

  return true
}
