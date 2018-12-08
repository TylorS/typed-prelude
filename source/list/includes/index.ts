import { indexOf } from '../../common/indexOf'
import { curry } from '../../lambda'

export const includes = curry(
  <A>(value: A, list: ArrayLike<A>): boolean => indexOf(list, value) > -1,
) as {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
}
