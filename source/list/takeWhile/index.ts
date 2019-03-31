import { curry } from '@typed/lambda'
import { slice } from '../slice'

export const takeWhile: {
  <A>(f: (a: A, i: number) => boolean, list: ArrayLike<A>): A[]
  <A>(f: (a: A, i: number) => boolean): (list: ArrayLike<A>) => A[]
} = curry(_takeWhile)

function _takeWhile<A>(f: (a: A, i: number) => boolean, list: ArrayLike<A>): A[] {
  const length = list.length
  let index = 0

  while (index < length && f(list[index], index)) {
    index += 1
  }

  return slice(0, index, list)
}
