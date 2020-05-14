import { uniq } from '@typed/list'
import { equals } from '@typed/logic'
import { fromJust, isNothing, Just } from '@typed/maybe'
import { createParser } from './createParser'
import { getPositionalArgumentValue } from './getPositionalArgumentValue'
import { isArgumentFlag } from './isArgumentFlag'
import { ArgParser, ArgParserResult, ParseOptions } from './types'

const isTrue = equals('true')

export function parseBooleanArg<A extends string>(
  name: A,
  options: ParseOptions = {},
): ArgParser<A, boolean> {
  return createParser(name, options, (index: number, args: readonly string[]) => {
    const [valueIndex, value] = parseBooleanArgByPosition(index, args)
    const indexesUsed = uniq([index, valueIndex])

    const result: ArgParserResult<A, boolean> = [
      indexesUsed,
      Just.of({ [name]: value } as { [K in A]: boolean }),
    ]

    return result
  })
}

function parseBooleanArgByPosition(
  index: number,
  args: readonly string[],
): readonly [number, boolean] {
  const positionalArg = getPositionalArgumentValue(index, args)

  if (isNothing(positionalArg)) {
    return [index, true]
  }

  const [valueIndex, arg] = fromJust(positionalArg)

  if (isArgumentFlag(arg)) {
    return [index, true]
  }

  return [valueIndex, isTrue(arg)]
}
