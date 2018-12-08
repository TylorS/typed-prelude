import { mapArrayLike } from '../../common/mapArrayLike'
import { Arity1, curry } from '../../lambda'

export const map = curry((f, list) => mapArrayLike(f, list)) as {
  <A, B>(fn: Arity1<A, B>, list: ArrayLike<A>): B[]
  <A, B>(fn: Arity1<A, B>): (list: ArrayLike<A>) => B[]
}
