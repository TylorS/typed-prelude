import { Env, LazyEnv, Pure, Resources } from '@typed/env'
import { Include, OrToAnd } from '@typed/lambda'

// A collection of effects including Pure implementations
export type Effects<A, B> = Generator<Env<A, any> | Pure<any>, B, any>

// An individual effect
export type Effect<A, B> = Generator<Env<A, any>, B, any>

export type Yield<A> = A extends Generator<infer R, any, any> ? R : never
export type Return<A> = A extends Generator<any, infer R, any> ? R : never
export type Next<A> = A extends Generator<any, any, infer R> ? R : never

export namespace Effect {
  export function of<A>(value: A): Generator<Pure<A>, A, A> {
    return fromEnv(Pure.of(value))
  }

  export function* fromEnv<A, B>(env: Env<A, B>): Generator<Env<A, B>, B, B> {
    return yield env
  }
}

export type CombinedEffectResources<A extends ReadonlyArray<Effect<any, any>>> = Compact<
  OrToAnd<EffectResources<A[number]>>
>

export type CombinedEffectValues<A extends ReadonlyArray<Effect<any, any>>> = Return<A[number]>

export type EffectResources<A> = A extends Generator<infer B, any, any>
  ? Compact<OrToAnd<Resources<Include<B, LazyEnv<any, any>>>>>
  : never

export type EffectIterator<A> = A extends Generator<infer R, infer S, infer T>
  ? Iterator<R, S, T>
  : never

export type EffectIteratorResult<A> = A extends Generator<infer R, infer S, any>
  ? IteratorResult<R, S>
  : never

// Allows combining together an intersection of objects into 1
type Compact<A> = { [K in keyof A]: A[K] }
