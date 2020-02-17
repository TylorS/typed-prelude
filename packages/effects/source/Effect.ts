import { Env, LazyEnv, Pure, Resources } from '@typed/env'
import { OrToAnd } from '@typed/lambda'

export type Effects<A, B> = Effect<LazyEnv<A, any> | Pure<any>, B, any>

export interface Effect<A, B, C> {
  readonly [Symbol.iterator]: () => Iterator<A, B, C>
}

export namespace Effect {
  export const of = <A, B = A>(value: A): Effect<A, B, B> => ({
    *[Symbol.iterator]() {
      return yield value
    },
  })

  export const create = <Args extends readonly any[], A, B, C>(
    f: (...args: Args) => Generator<A, B, C>,
  ) => (...args: Args): Effect<A, B, C> => ({
    [Symbol.iterator]: () => f(...args),
  })

  export const fromEnv = <A, B>(env: Env<A, B>): Effect<Env<A, B>, B, B> => of(env)
}

export type EffectResources<A> = A extends Effects<infer R, any> ? OrToAnd<Resources<R>> : never

export type EffectValue<A> = A extends Effect<any, infer R, any> ? R : never

export type EffectIterator<A> = A extends Effect<infer R, infer S, infer T>
  ? Iterator<R, S, T>
  : never

export type EffectIteratorResult<A> = A extends Effect<infer R, infer S, any>
  ? IteratorResult<R, S>
  : never
