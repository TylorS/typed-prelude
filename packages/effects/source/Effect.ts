import { Compact } from '@typed/common'
import { CapabilitiesOf, Env, Pure } from '@typed/env'
import { OrToAnd } from '@typed/lambda'

// A collection of effects including Pure implementations
export type Effects<A, B> = Generator<Env<A, any> | Pure<any>, B, any>

// An individual effect
export type Effect<A, B> = Generator<Env<A, any>, B, any>
export type PureEffect<A> = Generator<Pure<any>, A, any>

export type Yield<A> = A extends Generator<infer R, any, any> ? R : never
export type Return<A> = A extends Generator<any, infer R, any> ? R : never
export type Next<A> = A extends Generator<any, any, infer R> ? R : never

export type Capabilities<A> = CapabilitiesOf<Yield<A>>

export namespace Effect {
  export function of<A>(value: A): Generator<Pure<A>, A, A> {
    return fromEnv(Pure.of(value))
  }

  export function fromEnv<A, B>(env: Env<A, B>): Generator<Env<A, B>, B, B>
  export function fromEnv<A>(pure: Pure<A>): Generator<Pure<A>, A, A>
  export function* fromEnv<A, B>(env: Env<A, B>): Generator<Env<A, B>, B, B> {
    return yield env
  }
}

export type IteratorOf<A> = Iterator<Yield<A>, Return<A>, Next<A>>
export type IteratorResultOf<A> = IteratorResult<Yield<A>, Return<A>>

export type CombinedCapabilities<A extends ReadonlyArray<Effect<any, any>>> = Compact<
  OrToAnd<Capabilities<A[number]>>
>
export type CombinedValues<A extends ReadonlyArray<Effect<any, any>>> = {
  [K in keyof A]: Return<A[K]>
}
