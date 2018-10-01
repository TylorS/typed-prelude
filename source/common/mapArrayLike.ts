import { Arity1 } from '../lambda'

export function mapArrayLike<A, B>(fn: Arity1<A, B>, functor: ArrayLike<A>): B[] {
  let idx = 0
  const len = functor.length
  const result = Array(len)

  while (idx < len) {
    result[idx] = fn(functor[idx])
    idx += 1
  }

  return result
}
