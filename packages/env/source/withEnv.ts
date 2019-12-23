import { Disposable } from '@typed/disposable'
import { Arity1 } from '@typed/lambda'
import { Env } from './Env'

/**
 * Create an environment-dependent calculcation
 * @param fn :: (a -> b)
 */
export function withEnv<A, B>(fn: Arity1<A, B>): Env<A, B> {
  return {
    type: 'lazy',
    runEnv: (f, e) => (f(fn(e)), Disposable.None),
  }
}
