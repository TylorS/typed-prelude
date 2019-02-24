import { Arity1 } from '@typed/lambda'

export const chain = <A, B>(fn: Arity1<A, Promise<B>>, promise: Promise<A>): Promise<B> =>
  promise.then(fn)
