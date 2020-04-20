import { JsonObject } from '@typed/common'
import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'
import { splitToken } from './splitToken'

export function getHeader(jwt: Jwt): JsonObject {
  const [header] = splitToken(jwt)

  return JSON.parse(base64UrlDecode(header))
}
