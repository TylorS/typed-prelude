import { Jwt } from './Jwt'

export function getToken(jwt: Jwt) {
  const [a = '', b = ''] = jwt.split('.').map((s) => s.trim())

  return [a, b].join('.')
}
