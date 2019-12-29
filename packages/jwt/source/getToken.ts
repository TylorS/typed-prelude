import { Jwt } from './Jwt'

export function getToken(jwt: Jwt) {
  const [a, b] = jwt.split('.')

  return [a, b].join('.')
}
