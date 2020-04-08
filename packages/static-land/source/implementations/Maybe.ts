import {
  Maybe,
  map,
  Just,
  ap,
  chain,
  Nothing,
  race,
  unpack,
  isNothing,
  fromJust,
} from '@typed/maybe'
import {
  Monad,
  Filterable,
  Extend,
  Foldable,
  Alternative,
  Traversable,
  Types,
  Applicative,
  Type,
} from '../type-classes'
import { Predicate, Arity2, Arity1 } from '@typed/lambda'

declare const MAYBE: unique symbol
export type MAYBE = typeof MAYBE

declare module '../type-classes/Hkt' {
  export interface Hkts<A> {
    readonly [MAYBE]: Maybe<A[0]>
  }
}

export const maybe: Monad<MAYBE> &
  Filterable<MAYBE> &
  Extend<MAYBE> &
  Alternative<MAYBE> &
  Foldable<MAYBE> &
  Traversable<MAYBE> = {
  map,
  ap,
  of: Just.of,
  chain,
  alt: race,
  filter: <A>(predicate: Predicate<A>, maybe: Maybe<A>): Maybe<A> =>
    chain((a) => (predicate(a) ? Just.of(a) : Nothing), maybe),
  extend: <A, B>(fn: (maybe: Maybe<A>) => B, maybe: Maybe<A>): Maybe<B> => Just.of(fn(maybe)),
  reduce: <A, B>(fn: Arity2<A, B, A>, seed: A, maybe: Maybe<B>): A =>
    unpack(
      (b) => fn(seed, b),
      () => seed,
      maybe,
    ),
  traverse: <U extends Types, A, B>(
    applicative: Applicative<U>,
    f: Arity1<A, Type<U, [B]>>,
    maybe: Maybe<A>,
  ): Type<U, [Maybe<B>]> => {
    return isNothing(maybe) ? applicative.of(Nothing) : applicative.map(Just.of, f(fromJust(maybe)))
  },
}
