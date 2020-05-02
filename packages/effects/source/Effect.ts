import { Flatten, UnNest } from '@typed/common'
import { Env, Pure, withEnv as runWithEnv } from '@typed/env'
import { Fn } from '@typed/lambda'

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

export type Capabilities<A> = A extends Effects<infer R, any> ? R : never

export namespace Effect {
  export function of<A>(value: A): PureEffect<A> {
    return fromEnv(Pure.of(value))
  }

  export function fromEnv<A, B>(env: Env<A, B>): Effect<Env<A, B>, B>
  export function fromEnv<A>(pure: Pure<A>): Effect<Pure<A>, A>
  export function* fromEnv<A, B>(env: Env<A, B>): Effect<Env<A, B>, B> {
    return yield env
  }

  export function* withEnv<A, B>(fn: (env: A) => Effects<A, B>): Effects<A, B> {
    const effect: Effects<A, B> = yield runWithEnv(fn)

    return yield* effect
  }
}

export type IteratorResultOf<A> = IteratorResult<Yield<A>, Return<A>>

export type CombinedCapabilities<A extends ReadonlyArray<Effect<any, any>>> = UnNest<
  Flatten<ToConsList<A>, {}>
>

export type CombinedValues<A extends ReadonlyArray<Effect<any, any>>> = {
  readonly [K in keyof A]: Return<A[K]>
}

type ToConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [Capabilities<T>, ToConsList<TS>]
  : never
