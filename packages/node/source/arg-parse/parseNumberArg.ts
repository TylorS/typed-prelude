import { uniq } from '@typed/list'
import { fromJust, isNothing, Just, map, Maybe, Nothing } from '@typed/maybe'
import { createParser } from './createParser'
import { getPositionalArgumentValue } from './getPositionalArgumentValue'
import { ArgParser, ArgParserResult, ParseOptions } from './types'

export function parseNumberArg<A extends string>(
  name: A,
  options: ParseOptions = {},
): ArgParser<A, number> {
  return createParser(name, options, (index, args) => {
    const [valueIndex, value] = parseNumberArgByPosition(index, args)
    const indexesUsed = uniq([index, valueIndex])

    const result: ArgParserResult<A, number> = [
      indexesUsed,
      map((value) => ({ [name]: value } as { [K in A]: number }), value),
    ]

    return result
  })
}

function parseNumberArgByPosition(
  index: number,
  args: readonly string[],
): readonly [number, Maybe<number>] {
  const positionalArg = getPositionalArgumentValue(index, args)

  if (isNothing(positionalArg)) {
    return [index, Nothing]
  }

  const [valueIndex, arg] = fromJust(positionalArg)
  const value = parseFloat(arg)

  return [valueIndex, Number.isNaN(value) ? Nothing : Just.of(value)]
}
