import { Disposable } from '@typed/disposable'
import { Arity1, curry } from '@typed/lambda'
import { Env } from './Env'

export const chain = curry(__chain) as {
  <A, B, C, D>(fn: Arity1<A, Env<B, C>>, env: Env<D, A>): Env<B & D, C>
  <A, B, C>(fn: Arity1<A, Env<B, C>>): <D>(env: Env<D, A>) => Env<B & D, C>
}

function __chain<A, B, C, D>(fn: Arity1<A, Env<B, C>>, env: Env<D, A>): Env<B & D, C> {
  return {
    runEnv: (f, r) => {
      let disposable = env.runEnv(a => {
        disposable = fn(a).runEnv(f, r)
      }, r)

      return Disposable.lazy(() => disposable)
    },
  }
}
