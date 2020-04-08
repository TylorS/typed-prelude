import { Either, ap, map, chain, mapLeft, isLeft, unpack } from '@typed/either'
import { Monad, Bifunctor, Alternative, Extend, Foldable } from '../type-classes'
import { Arity1, Arity2 } from '@typed/lambda'

declare const EITHER: unique symbol
export type EITHER = typeof EITHER

declare module '../type-classes/Hkt' {
  export interface Hkts<A> {
    readonly [EITHER]: Either<A[0], A[1]>
  }
}

export const either: Monad<EITHER> &
  Bifunctor<EITHER> &
  Alternative<EITHER> &
  Extend<EITHER> &
  Foldable<EITHER> = {
  alt: <A, B>(first: Either<A, B>, second: Either<A, B>): Either<A, B> =>
    isLeft(first) ? second : first,
  of: Either.of,
  ap,
  map,
  chain,
  bimap: <A, B, C, D>(f: Arity1<A, B>, g: Arity1<C, D>, either: Either<A, C>): Either<B, D> =>
    map(g, mapLeft(f, either)),
  extend: <A, B, C>(fn: (either: Either<A, B>) => C, either: Either<A, B>): Either<A, C> =>
    Either.of(fn(either)),
  reduce: <A, B, C>(reducer: Arity2<A, B, A>, seed: A, either: Either<C, B>): A =>
    unpack(
      (_) => seed,
      (b) => reducer(seed, b),
      either,
    ),
}
