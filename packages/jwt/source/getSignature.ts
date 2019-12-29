import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'

export function getSignature(jwt: Jwt): string {
  return base64UrlDecode(jwt.split('.')[2])
}
