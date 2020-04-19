import { Jwt } from './Jwt'

export function splitToken(jwt: Jwt): readonly [string, string, string] {
  const [a, b, c] = jwt
    .split(/\./g)
    .map((s) => s.trim())
    .filter(Boolean)

  return [a, b, c]
}
