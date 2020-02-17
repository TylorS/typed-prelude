import { Arity1, curry } from '@typed/lambda'
import { Env } from './Env'
import { isValueEnv } from './isEnv'
import { runEnv } from './runEnv'

export const chain = curry(__chain) as {
  <A, B, C, D>(fn: Arity1<A, Env<B, C>>, env: Env<D, A>): Env<B & D, C>
  <A, B, C>(fn: Arity1<A, Env<B, C>>): <D>(env: Env<D, A>) => Env<B & D, C>
}

function __chain<A, B, C, D>(fn: Arity1<A, Env<B, C>>, env: Env<D, A>): Env<B & D, C> {
  if (isValueEnv(env)) {
    return fn(env.value)
  }

  return {
    type: 'lazy',
    runEnv: (f, r) => runEnv(a => runEnv(f, r, fn(a)), r, env),
  }
}
