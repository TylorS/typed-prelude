import { Just } from './Just'
import { Nothing } from './Nothing'

export type Maybe<A> = Just<A> | Nothing

export type MaybeOf<A> = { [K in keyof A]: Maybe<A[K]> }

export type MaybeValue<A extends Maybe<any>> = A extends Maybe<infer R> ? R : never

export namespace Maybe {
  /**
   * Creates a Maybe containing a value. If the value is `undefined` or `null`
   * a `Nothing` will be returned. All other values will be wrapped in a `Just`.
   * @name Maybe.of<A>(value: A): Maybe<A>
   */
  export const of = <A>(value: A | null | undefined | void): Maybe<A> =>
    value === null || value === undefined ? Nothing : Just.of<A>(value as A)

  export const fromString = (str: string | null | undefined | void): Maybe<string> =>
    !str ? Nothing : Just.of(str)
}
