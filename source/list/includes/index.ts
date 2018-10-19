import { indexOf } from '../../common/indexOf'
import { curry } from '../../lambda'

export const includes: {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
} = curry(<A>(value: A, list: ArrayLike<A>): boolean => indexOf(list, value) > -1)
