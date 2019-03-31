import { DropKeys } from '@typed/common/types'
import { Disposable } from '@typed/disposable'
import { Arity1, Arity2, IO } from '@typed/lambda'

export interface Env<A = any, B = any> {
  readonly runEnv: Arity2<Arity1<B>, A, Disposable>
}
export interface Pure<A = any> extends Env<never, A> {
  readonly runEnv: Arity1<Arity1<A>, Disposable>
}

export type EnvOf<A, B> = { [K in keyof B]: Env<A, B[K]> }

export type Handle<A, E extends Env<any, any>> = Exclude<
  keyof EnvResources<E>,
  keyof A
> extends never
  ? Pure<EnvValue<E>>
  : Env<DropKeys<EnvResources<E>, keyof A>, EnvValue<E>>

export type EnvResources<A> = A extends Env<infer R, any> ? R : never
export type EnvValue<A> = A extends Env<any, infer R> ? R : never

export namespace Env {
  /** Can not be cancelled */
  export const of = <A>(value: A): Pure<A> => ({ runEnv: cb => (cb(value), Disposable.None) })
  export const fromIO = <A>(fn: IO<A>): Pure<A> => ({ runEnv: cb => (cb(fn()), Disposable.None) })
}
