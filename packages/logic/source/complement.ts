import { Arity1, Is, IsNot, pipe } from '@typed/lambda'
import { not } from './not'

/**
 * Wrap a function in a negation
 * @param :: (a -> b)
 * @returns :: (a -> boolean)
 */
export const complement: {
  <A>(fn: Is<A>): IsNot<A>
  <A>(fn: IsNot<A>): Is<A>
  <A, B>(fn: Arity1<A, B>): Arity1<A, boolean>
} = <A, B>(fn: Arity1<A, B>) => pipe(fn, not) as any
