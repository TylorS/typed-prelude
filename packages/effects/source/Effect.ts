import { Env, Resources } from '@typed/env'

export type Effect<A, B, C> = {
  readonly [Symbol.iterator]: () => Iterator<A, B, C>
}

export namespace Effect {
  export const of = <A, B>(value: A): Effect<A, B, B> => ({
    *[Symbol.iterator]() {
      return yield value
    },
  })

  export const create = <Args extends readonly any[], A, B, C>(
    f: (...args: Args) => Generator<A, B, never>,
  ) => (...args: Args): Effect<A, B, C> => ({
    [Symbol.iterator]: () => f(...args),
  })

  export const fromEnv = <A, B>(env: Env<A, B>): Effect<Env<A, B>, B, B> => of(env)
}

export type EffectResources<A> = A extends Effect<infer Env, any, any> ? Resources<Env> : never

export type EffectValue<A> = A extends Effect<any, infer R, any> ? R : never

export type EffectIterator<A> = A extends Effect<infer R, infer S, infer T>
  ? Iterator<R, S, T>
  : never

export type EffectIteratorResult<A> = A extends Effect<infer R, infer S, any>
  ? IteratorResult<R, S>
  : never