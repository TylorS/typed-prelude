import { isUndefined } from '@typed/logic'

export function getRequiredEnvVar(name: string): string {
  const envVar = process.env[name]

  if (isUndefined(envVar)) {
    throw new Error(`Unable to find environment variable ${name}`)
  }

  return envVar
}
