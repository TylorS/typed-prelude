import { getClaims } from './getClaims'
import { Jwt } from './Jwt'

export function getExpiration(jwt: Jwt, expirationKey: string = 'exp'): Date {
  const claims = getClaims(jwt)

  if (expirationKey in claims && typeof claims[expirationKey] === 'number') {
    const seconds = claims[expirationKey] as number
    const milliseconds = seconds * 1000

    return new Date(milliseconds)
  }

  // Already expired
  return new Date(Date.now() - 1)
}
