import { JsonObject } from '@typed/common'
import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'

export function getHeader(jwt: Jwt): JsonObject {
  return JSON.parse(base64UrlDecode(jwt.split('.')[0]))
}
