import { Disposable, withIsDisposed } from '@typed/disposable'
import { IO } from '@typed/lambda'

/**
 * Generic type for computations that depend on resources
 * from the environment.
 */
export type Env<A = any, B = any> = LazyEnv<A, B> | ValueEnv<B>
export type EnvType = Env['type']

export type ValueEnv<A> = { readonly type: 'value'; readonly value: A }
export type LazyEnv<A, B> = {
  readonly type: 'lazy'
  readonly runEnv: (cb: (value: B) => Disposable, environment: A) => Disposable
}

/**
 * A computation that has all evironmental dependencies handled
 */
export type Pure<A = any> = Env<never, A>

/**
 * Mapped-type to environments of A
 */
export type EnvOf<A, B> = { readonly [K in keyof B]: Env<A, B[K]> }

/**
 * Extracts the resources required to satify an environment
 */
export type Resources<Env> = U2I<EnvResources<Env>>

type U2I<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export type EnvResources<A> = A extends LazyEnv<infer R, any>
  ? R
  : A extends ValueEnv<any>
  ? never
  : never

export type EnvValue<A> = A extends LazyEnv<any, infer R>
  ? R
  : A extends ValueEnv<infer R>
  ? R
  : never

export namespace Env {
  /** Can not be cancelled */
  /**
   * Create an Environment with a value
   * @param value :: A
   * @returns Pure<A>
   */
  export const of = <A>(value: A): Pure<A> => ({
    type: 'value',
    value,
  })

  export const fromIO = <A>(fn: IO<A>): Pure<A> => ({
    type: 'lazy',
    runEnv: cb => withIsDisposed(isDisposed => !isDisposed() && cb(fn())),
  })

  export const create = <E, A>(runEnv: LazyEnv<E, A>['runEnv']): Env<E, A> => ({
    type: 'lazy',
    runEnv,
  })
}

export namespace Pure {
  export const of = Env.of
  export const fromIO = Env.fromIO

  // Does nothing
  export const empty: Pure<any> = Env.create(() => Disposable.None)
}
