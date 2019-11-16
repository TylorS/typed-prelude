import { Arity1, curry, pipe } from '@typed/lambda'
import { Env } from './Env'

/**
 * Map one environment-dependent computation to another
 * @param fn :: (a -> b)
 * @param env :: Env e a
 * @returns :: Env e b
 */
export const map = curry(__map) as {
  <E, A, B>(fn: Arity1<A, B>, env: Env<E, A>): Env<E, B>
  <A, B>(fn: Arity1<A, B>): <E>(env: Env<E, A>) => Env<E, B>
}

function __map<E, A, B>(fn: Arity1<A, B>, env: Env<E, A>): Env<E, B> {
  return {
    runEnv: (f, e) => env.runEnv(pipe(fn, f), e),
  }
}
