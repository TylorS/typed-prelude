import { Arity1, pipe } from '@typed/lambda'
import { Env } from './Env'
import { Resume } from './Resume'

/**
 * Create an environment-dependent calculation
 * @param fn :: (a -> b)
 */
export function withEnv<A, B>(fn: Arity1<A, B>): Env<A, B> {
  return pipe(fn, Resume.of)
}
