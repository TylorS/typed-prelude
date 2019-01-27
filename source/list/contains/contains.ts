import { curry } from '@typed/lambda'
import { isJust } from '@typed/maybe'
import { indexOf } from '../indexOf'

export const contains = curry((value, list) => isJust(indexOf(value, list))) as {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
}
