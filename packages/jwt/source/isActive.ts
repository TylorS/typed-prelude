import { getExpiration } from './getExpiration'
import { getNotBefore } from './getNotBefore'
import { Jwt } from './Jwt'

export type IsActiveOptions = {
  readonly notBeforeKey?: string
  readonly expirationKey?: string
}

export function isActive(jwt: Jwt, options: IsActiveOptions = {}): boolean {
  const notBefore = getNotBefore(jwt, options.notBeforeKey)
  const expiration = getExpiration(jwt, options.expirationKey)
  const now = new Date()

  return now >= notBefore && now < expiration
}
