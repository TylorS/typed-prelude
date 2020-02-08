import { DropKeys } from '@typed/common'
import { Disposable } from '@typed/disposable'
import { Arity1, curry } from '@typed/lambda'
import { Env, EnvValue, Pure, Resources } from './Env'
import { isValueEnv } from './isEnv'

/**
 * Provide resources to an Env
 */
export type Handle<A, E extends Env<any, any>> = Exclude<keyof Resources<E>, keyof A> extends never
  ? Pure<EnvValue<E>>
  : Env<DropKeys<Resources<E>, keyof A>, EnvValue<E>>

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
