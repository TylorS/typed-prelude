import { DropKeys } from '@typed/common/types'
import { Arity1, curry } from '@typed/lambda'
import { Env, Handle } from './Env'

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
  const handledEnv = {
    runEnv: (f: Arity1<C>, r: DropKeys<B, keyof A>) =>
      env.runEnv(f, Object.assign({} as B, resources, r)),
  }

  return handledEnv as Handle<A, Env<B, C>>
}
