import { map, Maybe } from '@typed/maybe'

const EQUAL_SYNTAX = '='

export function getPositionalArgumentValue(
  index: number,
  args: readonly string[],
): Maybe<readonly [number, string]> {
  const arg = args[index]

  if (isEqualSyntax(arg)) {
    const [, value] = arg.split(EQUAL_SYNTAX)

    return map((x) => [index, x], Maybe.fromString(value))
  }

  const nextIndex = index + 1
  const nextArg = args[nextIndex]

  return map((x) => [nextIndex, x], Maybe.fromString(nextArg))
}

function isEqualSyntax(arg: string) {
  return arg.indexOf(EQUAL_SYNTAX) > -1
}
