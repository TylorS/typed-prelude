import { Effects, get } from '@typed/effects'
import { trim } from '@typed/strings'
import { ArgsEnv } from './types'

export function* getArgs(): Effects<ArgsEnv, readonly string[]> {
  const { args } = yield* get<ArgsEnv>()
  const argsToUse = args.map(trim)
  const index = argsToUse.indexOf('--')

  return argsToUse.slice(0, index)
}
