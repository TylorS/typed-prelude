import { JsonObject } from '@typed/common'
import { base64UrlDecode } from './base64UrlDecode'
import { Jwt } from './Jwt'
import { splitToken } from './splitToken'

export function getClaims<A extends JsonObject>(jwt: Jwt): A {
  const [, claims] = splitToken(jwt)

  return JSON.parse(base64UrlDecode(claims))
}
