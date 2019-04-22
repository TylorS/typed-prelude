import { curry } from '@typed/lambda'

/**
 * Going together a list into a string separated by some string.
 * @param separator :: string
 * @param list :: [a]
 * @returns :: string
 */
export const join = curry(__join) as {
  <A>(separator: string, list: ArrayLike<A>): string
  <A>(separator: string): (list: ArrayLike<A>) => string
}

function __join<A>(separator: string, list: ArrayLike<A>): string {
  let str = ''
  const length = list.length

  for (let i = 0; i < length - 1; ++i) {
    str += `${String(list[i])}${separator}`
  }

  return str + String(list[length - 1])
}
