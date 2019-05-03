import { Arity1, pipe } from '@typed/lambda'
import { not } from './not'

/**
 * Wrap a function in a negation
 * @param :: (a -> b)
 * @returns :: (a -> boolean)
 */
export const complement = <A, B>(fn: Arity1<A, B>) =>
  pipe(
    fn,
    not,
  )
