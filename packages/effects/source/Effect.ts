import { Env } from '@typed/env'
import { OrToAnd } from '@typed/lambda'

export type Effect<A, B> = Generator<Env<A, any>, B, any>

export namespace Effect {
  export function* of<A, B = A>(value: A): Generator<A, B, B> {
    return yield value
  }
  export const fromEnv: <A = never, B = unknown>(env: Env<A, B>) => Generator<Env<A, B>, B, B> = of
}

export type EffectResources<A> = A extends Effect<infer R, any> ? OrToAnd<R> : never
export type EffectValue<A> = A extends Effect<any, infer R> ? R : never

export type EffectIterator<A> = A extends Generator<infer R, infer S, infer T>
  ? Iterator<R, S, T>
  : never

export type EffectIteratorResult<A> = A extends Generator<infer R, infer S, any>
  ? IteratorResult<R, S>
  : never
