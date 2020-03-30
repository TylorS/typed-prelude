import { CapabilitiesOf, Env, Pure } from '@typed/env'
import { Fn, OrToAnd } from '@typed/lambda'

export interface Effects<A = any, B = any> extends Effect<Env<A, any>, B> {}

export interface Effect<A, B> extends Generator<A, B, any> {}

export type TypeOf<A> = A extends Effect<any, any>
  ? Effects<Capabilities<A>, Return<A>>
  : A extends (...args: readonly any[]) => Effects<any, any>
  ? Effects<Capabilities<ReturnType<A>>, Return<ReturnType<A>>>
  : unknown

export interface Computation<A extends readonly any[], B, C> extends Fn<A, Effects<B, C>> {}

// An individual effect
export type PureEffect<A> = Effect<Pure<any>, A>

export type Yield<A> = A extends Effect<infer R, any> ? R : never
export type Return<A> = A extends Effect<any, infer R> ? R : never

export type Capabilities<A> = A extends Effect<infer C, any>
  ? OrToAnd<CapabilitiesOf<Exclude<C, Pure<any>>>>
  : A extends Effects<infer R, any>
  ? OrToAnd<R>
  : never

export namespace Effect {
  export function of<A>(value: A): PureEffect<A> {
    return fromEnv(Pure.of(value))
  }

  export function fromEnv<A, B>(env: Env<A, B>): Effect<Env<A, B>, B>
  export function fromEnv<A>(pure: Pure<A>): Effect<Pure<A>, A>
  export function* fromEnv<A, B>(env: Env<A, B>): Effect<Env<A, B>, B> {
    return yield env
  }
}

export type IteratorResultOf<A> = IteratorResult<Yield<A>, Return<A>>

export type CombinedCapabilities<A extends ReadonlyArray<Effect<any, any>>> = OrToAnd<
  Capabilities<A[number]>
>

export type CombinedValues<A extends ReadonlyArray<Effect<any, any>>> = {
  readonly [K in keyof A]: Return<A[K]>
}
