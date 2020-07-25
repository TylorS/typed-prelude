import { ap, chain, Either, fromRight, isLeft, isRight, map, mapLeft, unpack } from '@typed/either'
import { Arity1 } from '@typed/lambda'
import {
  Alt,
  Bifunctor,
  ChainRec,
  Done,
  Extend,
  Foldable,
  Monad,
  Next,
  tailRecursion,
  TypeParams,
} from 'hkt-ts'

export const EitherUri = '@typed/either' as const
export type EitherUri = typeof EitherUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    [EitherUri]: Either<TypeParams.Second<Params>, TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [EitherUri]: [T] extends [Either<infer A, infer B>] ? [A, B] : never
  }
}

export const either: Monad<EitherUri> &
  Foldable<EitherUri> &
  Bifunctor<EitherUri> &
  Alt<EitherUri> &
  Extend<EitherUri> &
  ChainRec<EitherUri> = {
  URI: EitherUri,
  of: Either.of,
  ap,
  map,
  chain,
  reduce: <A, B, C>(f: (acc: A, value: B) => A, seed: A, either: Either<C, B>) =>
    unpack(
      () => seed,
      (b) => f(seed, b),
      either,
    ),
  bimap: <A, B, C, D>(f: Arity1<A, B>, g: Arity1<C, D>, either: Either<A, C>) =>
    map(g, mapLeft(f, either)),
  alt: <A extends Either<any, any>, B extends Either<any, any>>(a: A, b: B): A | B =>
    isRight(a) ? a : b,
  extend: <A, B, C>(f: (either: Either<A, B>) => C, either: Either<A, B>): Either<A, C> =>
    map(() => f(either), either),
  chainRec: <A, B, C>(
    f: (n: (a: A) => Next<A>, d: (b: B) => Done<B>, value: A) => Either<C, Next<A> | Done<B>>,
    a: A,
  ): Either<C, B> =>
    tailRecursion(a, (a) => {
      const either = f(Next.of, Done.of, a)

      if (isLeft(either)) {
        return Done.of(either)
      }

      const result = fromRight(either)

      return result.done ? Done.of(Either.of(result.value)) : result
    }),
}
