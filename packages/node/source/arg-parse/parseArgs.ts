import { Effects } from '@typed/effects'
import { OrToAnd } from '@typed/lambda'
import { fromJust, isNothing } from '@typed/maybe'
import { findRemainingArgs } from './findRemainingArgs'
import { parseBooleanArg } from './parseBooleanArg'
import { ArgParser, ArgParserNameValue, ArgsEnv } from './types'

const helpParser = parseBooleanArg('help', { aliases: ['h'] })

export function* parseArgs<A extends ReadonlyArray<ArgParser<any, any>>>(
  parsers: A,
): Effects<ArgsEnv, ArgValues<A>> {
  const value = { _: [] as readonly string[], help: false } as ArgValues<A>
  const parsedIndexes: number[] = []

  for (const { parse } of [helpParser, ...parsers]) {
    const [indexesUsed, maybeValue] = yield* parse()

    if (isNothing(maybeValue)) {
      continue
    }

    parsedIndexes.push(...indexesUsed)

    Object.assign(value, fromJust(maybeValue))
  }

  Object.assign(value, yield* findRemainingArgs(parsedIndexes))

  return value
}

export type ArgValues<A extends ArrayLike<ArgParser<any, any>>> = OrToAnd<ArgNameValues<A>> & {
  readonly _: readonly string[]
  readonly help: boolean
}

export type ArgNameValues<A extends ArrayLike<ArgParser<any, any>>> = Partial<
  Exclude<
    {
      [K in keyof A]: A[K] extends ArgParser<any, any> ? ArgParserNameValue<A[K]> : never
    }[keyof A],
    number | Function
  >
>
