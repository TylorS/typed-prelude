import { Arity1 } from '@typed/lambda'

/**
 * Chain together multiple promises
 * @param fn :: a -> Promise b
 * @param promise :: Promise a
 * @returns :: Promise b
 */
export const chain = <A, B>(fn: Arity1<A, Promise<B>>, promise: Promise<A>): Promise<B> =>
  promise.then(fn)
