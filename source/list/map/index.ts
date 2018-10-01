import { Arity1, curry } from '../../lambda'

export const map: {
  <A, B>(fn: Arity1<A, B>, list: A[]): B[]
  <A, B>(fn: Arity1<A, B>): (list: A[]) => B[]
} = curry((f, list) => list.map(f))
