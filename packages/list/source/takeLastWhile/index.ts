import { curry } from '@typed/lambda'
import { slice } from '../slice'

/**
 * Take values from the ending of a list while predicate is true
 * @param n :: int
 * @param list :: [a]
 * @returns :: [a]
 */
export const takeLastWhile: {
  <A>(f: (a: A, i: number) => boolean, list: ArrayLike<A>): A[]
  <A>(f: (a: A, i: number) => boolean): (list: ArrayLike<A>) => A[]
} = curry(_takeLastWhile)

function _takeLastWhile<A>(f: (a: A, i: number) => boolean, list: ArrayLike<A>): A[] {
  let index = list.length - 1

  while (index >= 0 && f(list[index], index)) {
    index -= 1
  }

  return slice(index + 1, Infinity, list)
}
