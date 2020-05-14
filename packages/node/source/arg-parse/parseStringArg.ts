import { uniq } from '@typed/list'
import { fromJust, isNothing, map, Maybe, Nothing } from '@typed/maybe'
import { createParser } from './createParser'
import { getPositionalArgumentValue } from './getPositionalArgumentValue'
import { ArgParser, ArgParserResult, ParseOptions } from './types'

export function parseStringArg<A extends string>(
  name: A,
  options: ParseOptions = {},
): ArgParser<A, string> {
  return createParser(name, options, (index, args) => {
    const [valueIndex, value] = parseStringArgByPosition(index, args)
    const indexesUsed = uniq([index, valueIndex])
    const result: ArgParserResult<A, string> = [
      indexesUsed,
      map((value) => ({ [name]: value } as { [K in A]: string }), value),
    ]

    return result
  })
}

function parseStringArgByPosition(
  index: number,
  args: readonly string[],
): readonly [number, Maybe<string>] {
  const positionalArg = getPositionalArgumentValue(index, args)

  if (isNothing(positionalArg)) {
    return [index, Nothing]
  }

  const [valueIndex, arg] = fromJust(positionalArg)

  return [valueIndex, Maybe.fromString(arg)]
}
