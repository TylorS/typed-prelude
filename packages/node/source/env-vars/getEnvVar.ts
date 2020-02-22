import { Maybe } from '@typed/maybe'

export function getEnvVar(key: string): Maybe<string> {
  return Maybe.of(process.env[key])
}
