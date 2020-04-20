import { Jwt } from './Jwt'

export function splitToken(jwt: Jwt): readonly [string, string, string] {
  const [a, b, c] = jwt
    .split(/\./g)
    .map((s) => s.trim())
    .filter(Boolean)

  console.assert([a, b, c].join('.') === jwt)

  return [a, b, c]
}
