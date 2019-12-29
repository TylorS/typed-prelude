import { getExpiration } from './getExpiration'
import { Jwt } from './Jwt'

export function isExpired(jwt: Jwt): boolean {
  const expiration = getExpiration(jwt)
  const now = new Date()

  return now >= expiration
}
