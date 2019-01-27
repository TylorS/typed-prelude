import { mapArrayLike } from '@typed/common/mapArrayLike'
import { Arity1, curry } from '@typed/lambda'

export const map = curry((f, list) => mapArrayLike(f, list)) as {
  <A, B>(fn: Arity1<A, B>, list: ArrayLike<A>): B[]
  <A, B>(fn: Arity1<A, B>): (list: ArrayLike<A>) => B[]
}
