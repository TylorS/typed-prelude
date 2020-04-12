import { JsonObject } from '@typed/common'
import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'

export function getClaims<A extends JsonObject>(jwt: Jwt): A {
  return JSON.parse(base64UrlDecode(jwt.split('.')[1]))
}
