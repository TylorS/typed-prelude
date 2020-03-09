import { DropKeys } from '@typed/common'
import { Disposable } from '@typed/disposable'
import { Arity1, curry } from '@typed/lambda'
import { Env, Equals, Pure } from './Env'
import { isValueEnv } from './isEnv'

/**
 * Provide resources to an Env
 */
export type Handle<A, E> = E extends Env<infer B, infer C>
  ? Equals<A, B> extends true
    ? Pure<C>
    : B extends never
    ? Pure<C>
    : B extends A
    ? Env<Omit<B, keyof A>, C>
    : E
  : E

/**
 * Provide resources to an environment
 * @param resources :: A
 * @param env :: Env<B, C>
 * @returns :: Handle<A, Env<B, C>>
 */
export const handle = curry(__handle) as {
  <A, B, C>(resources: A, env: Env<B, C>): Handle<A, Env<B, C>>
  <A>(resources: A): <B, C>(env: Env<B, C>) => Handle<A, Env<B, C>>
}

function __handle<A, B, C>(resources: A, env: Env<B, C>): Handle<A, Env<B, C>> {
  if (isValueEnv(env)) {
    return env as Handle<A, Env<B, C>>
  }

  const handledEnv = {
    type: 'lazy',
    runEnv: (f: Arity1<C, Disposable>, r: DropKeys<B, keyof A>) =>
      env.runEnv(f, Object.assign({} as B, resources, r)),
  }

  return handledEnv as Handle<A, Env<B, C>>
}
