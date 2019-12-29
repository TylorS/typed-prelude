import { base64UrlEncode } from './base64UrlEncode'
import { hmacSha256 } from './hmacSha256'
import { JsonObject } from './Json'
import { Jwt } from './Jwt'

const header = encodeJson({
  alg: 'HS256',
  typ: 'JWT',
})

export async function sign(
  claims: JsonObject,
  secret: string | CryptoKey,
  crypto: Crypto,
): Promise<Jwt>
export async function sign(claims: JsonObject, secret: string, crypto?: Crypto): Promise<Jwt>

export async function sign(
  claims: JsonObject,
  secret: string | CryptoKey,
  crypto?: Crypto,
): Promise<Jwt> {
  const token = `${header}.${encodeJson(claims)}`
  const jwt = `${token}.${await hmacSha256(token, secret, crypto)}`

  return jwt as Jwt
}

function encodeJson(x: JsonObject) {
  return base64UrlEncode(JSON.stringify(x))
}
