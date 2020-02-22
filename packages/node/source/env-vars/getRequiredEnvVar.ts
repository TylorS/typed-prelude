import { fromJust, isNothing } from '@typed/maybe'
import { getEnvVar } from './getEnvVar'

export function getRequiredEnvVar(name: string): string {
  const envVar = getEnvVar(name)

  if (isNothing(envVar)) {
    throw new Error(`Unable to find environment variable ${name}`)
  }

  return fromJust(envVar)
}
