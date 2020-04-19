import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'
import { splitToken } from './splitToken'

export function getSignature(jwt: Jwt): string {
  const [, , c] = splitToken(jwt)

  return base64UrlDecode(c)
}
