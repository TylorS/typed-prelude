import { Jwt } from './Jwt'
import { splitToken } from './splitToken'
import { base64UrlDecode } from './base64UrlDecode'

export function getSignature(jwt: Jwt): string {
  const [, , signature] = splitToken(jwt)

  return base64UrlDecode(signature)
}
