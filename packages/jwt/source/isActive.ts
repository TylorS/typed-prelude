import { getExpiration } from './getExpiration'
import { getNotBefore } from './getNotBefore'
import { Jwt } from './Jwt'

export function isActive(jwt: Jwt): boolean {
  const notBefore = getNotBefore(jwt)
  const expiration = getExpiration(jwt)
  const now = new Date()

  return now >= notBefore && now < expiration
}
