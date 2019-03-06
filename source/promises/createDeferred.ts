import { Arity1 } from '@typed/lambda'

export type Deferred<A> = [Promise<A>, Arity1<A, void>, Arity1<Error, void>]

export const createDeferred = <A = unknown>(): Deferred<A> => {
  let success = (_: A): void => void 0
  let failure = (_: Error): void => void 0
  const promise = new Promise<A>((resolve, reject) => {
    success = resolve
    failure = reject
  })

  return [promise, success, failure]
}
