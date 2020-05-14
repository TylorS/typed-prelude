import { findLastIndex, reduce } from '@typed/list'
import { Maybe, race } from '@typed/maybe'

export function findNamedArg(
  name: string,
  aliases: readonly string[],
  args: readonly string[],
): Maybe<number> {
  const value = `--${name}`
  const namedValue = findLastIndex((arg) => arg.startsWith(value), args)
  const aliasValues = aliases.map((alias) => `-${alias}`)

  return reduce(
    (maybe, value) =>
      race(
        maybe,
        findLastIndex((arg) => arg.startsWith(value), args),
      ),
    namedValue,
    aliasValues,
  )
}
