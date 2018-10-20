import { mapArrayLike } from '../../common/mapArrayLike'
import { Arity1, curry } from '../../lambda'

export const map: {
  <A, B>(fn: Arity1<A, B>, list: ArrayLike<A>): B[]
  <A, B>(fn: Arity1<A, B>): (list: ArrayLike<A>) => B[]
} = curry((f, list) => mapArrayLike(f, list))
