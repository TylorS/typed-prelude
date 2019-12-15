import { Arity1, curry, pipe } from '@typed/lambda'
import { Env } from './Env'
import { isValueEnv } from './isEnv'
import { runEnv } from './runEnv'

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
  if (isValueEnv(env)) {
    return Env.of(fn(env.value))
  }

  return {
    type: 'lazy',
    runEnv: (f, e) => runEnv(pipe(fn, f), e, env),
  }
}
