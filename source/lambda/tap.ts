import { curry } from './curry'
import { Arity1 } from './types'

export const tap: {
  <A>(fn: Arity1<A>, value: A): A
  <A>(fn: Arity1<A>): (value: A) => A
} = curry(
  <A>(fn: Arity1<A>, value: A): A => {
    fn(value)

    return value
  },
)
