import { Jwt } from './Jwt'
import { splitToken } from './splitToken'

export function getToken(jwt: Jwt) {
  const [a, b] = splitToken(jwt)

  return [a, b].join('.')
}
