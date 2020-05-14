import { Effects, get } from '@typed/effects'
import { ArgsEnv } from './types'

export function* findRemainingArgs(
  usedIndexes: readonly number[],
): Effects<ArgsEnv, { readonly _: readonly string[] }> {
  const { args } = yield* get<ArgsEnv>()
  const remainingArgs = args.filter(
    (value, index) => value !== '--' && !usedIndexes.includes(index),
  )

  return { _: remainingArgs }
}
