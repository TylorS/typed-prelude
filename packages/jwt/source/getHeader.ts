import { base64UrlDecode } from './base64UrlDecode'
import { JsonObject } from './Json'
import { Jwt } from './Jwt'

export function getHeader(jwt: Jwt): JsonObject {
  return JSON.parse(base64UrlDecode(jwt.split('.')[0]))
}
