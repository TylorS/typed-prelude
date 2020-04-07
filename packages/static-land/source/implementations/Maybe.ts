import { Maybe, map, Just, ap, chain, Nothing, race, unpack } from '@typed/maybe'
import { Monad, Filterable, Extend, Foldable, Alternative } from '../type-classes'
import { Predicate, Arity2 } from '@typed/lambda'

declare const MAYBE: unique symbol
export type MAYBE = typeof MAYBE

declare module '../type-classes/Hkt' {
  export interface Hkts<A> {
    readonly [MAYBE]: Maybe<A[0]>
  }
}

export const filter = <A>(predicate: Predicate<A>, maybe: Maybe<A>): Maybe<A> =>
  chain((a) => (predicate(a) ? Just.of(a) : Nothing), maybe)

export const extend = <A, B>(fn: (maybe: Maybe<A>) => B, maybe: Maybe<A>): Maybe<B> =>
  Just.of(fn(maybe))

export const reduce = <A, B>(fn: Arity2<A, B, A>, seed: A, maybe: Maybe<B>): A =>
  unpack(
    (b) => fn(seed, b),
    () => seed,
    maybe,
  )

export const maybe: Monad<MAYBE> &
  Filterable<MAYBE> &
  Extend<MAYBE> &
  Alternative<MAYBE> &
  Foldable<MAYBE> = {
  map,
  ap,
  of: Just.of,
  chain,
  filter,
  extend,
  alt: race,
  reduce,
}
