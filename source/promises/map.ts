import { Arity1 } from '@typed/lambda'

export const map = <A, B>(fn: Arity1<A, B>, promise: Promise<A>): Promise<B> => promise.then(fn)
