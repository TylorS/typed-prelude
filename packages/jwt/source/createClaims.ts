import { JsonObject } from './Json'

export function createClaims<A extends JsonObject>(
  claims: A,
  expirationMs: number,
): Readonly<A & { nbf: number; exp: number }> {
  const now = Date.now()
  const nbf = now / 1000
  const exp = (now + expirationMs) / 1000

  return {
    nbf,
    exp,
    ...claims,
  }
}
