import { Arity1 } from '@typed/lambda'

/**
 * Map over a promise value
 * @param fn :: (a -> b)
 * @param promise :: Promise a
 * @returns :: Promise b
 */
export const map = <A, B>(fn: Arity1<A, B>, promise: Promise<A>): Promise<B> => promise.then(fn)
