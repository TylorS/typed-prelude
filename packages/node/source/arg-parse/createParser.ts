import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { fromJust, isNothing } from '@typed/maybe'
import { findNamedArg } from './findNamedArg'
import { getArgs } from './getArgs'
import { ArgParser, ArgParserResult, ArgParserResultValue, ParseOptions } from './types'

export function createParser<
  A extends string,
  F extends (index: number, args: readonly string[]) => ArgParserResult<A, any>
>(name: A, options: ParseOptions, parser: F): ArgParser<A, ArgParserResultValue<ReturnType<F>>> {
  const { aliases = [] } = options

  function help() {
    if (options.help) {
      return Effect.fromEnv(Pure.of(options.help))
    }

    return Effect.fromEnv(Pure.of(''))
  }

  function* parse() {
    const args = yield* getArgs()
    const argumentIndex = findNamedArg(name, aliases, args)

    if (isNothing(argumentIndex)) {
      return ArgParserResult.none as ArgParserResult<A, ArgParserResultValue<ReturnType<F>>>
    }

    return parser(fromJust(argumentIndex), args)
  }

  return { help, parse }
}
