import { getExpiration } from './getExpiration'
import { Jwt } from './Jwt'

export function isExpired(jwt: Jwt, expirationKey: string = 'exp'): boolean {
  const expiration = getExpiration(jwt, expirationKey)
  const now = new Date()

  return now >= expiration
}
