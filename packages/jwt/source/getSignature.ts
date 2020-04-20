import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'
import { splitToken } from './splitToken'

export function getSignature(jwt: Jwt): string {
  const [, , signature] = splitToken(jwt)

  return base64UrlDecode(signature)
}
