import { Arity1, curry } from '../../lambda'
import { flatten } from '../flatten'

export const chain: {
  <A, B>(fn: Arity1<A, B[]>, list: A[]): B[]
  <A, B>(fn: Arity1<A, B[]>): (list: A[]) => B[]
} = curry((f, list) => flatten(list.map(f)))
