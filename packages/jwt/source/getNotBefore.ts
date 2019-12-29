import { getClaims } from './getClaims'
import { Jwt } from './Jwt'

const notBeforeKey = 'nbf'

export function getNotBefore(jwt: Jwt): Date {
  const claims = getClaims(jwt)

  if (notBeforeKey in claims && typeof claims[notBeforeKey] === 'number') {
    const seconds = claims[notBeforeKey] as number
    const milliseconds = seconds * 1000

    return new Date(milliseconds)
  }

  // Right now
  return new Date()
}
