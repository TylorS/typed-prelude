import { ap, chain, concat, filter, map, reduce } from '@typed/list'
import { equals } from '@typed/logic'
import {
  Alt,
  Alternative,
  Applicative,
  Extend,
  Filterable,
  Foldable,
  Monad,
  Monoid,
  Setoid,
  Traversable,
  Type,
  TypeParams,
  UriOf,
} from 'hkt-ts'

export const ListUri = '@typed/list' as const
export type ListUri = typeof ListUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    readonly [ListUri]: ReadonlyArray<TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [ListUri]: T extends ReadonlyArray<infer R> ? [R] : never
  }
}

export const list: Monad<ListUri> &
  Alternative<ListUri> &
  Alt<ListUri> &
  Extend<ListUri> &
  Filterable<ListUri> &
  Foldable<ListUri> &
  Monoid<ListUri> &
  Setoid<ListUri> &
  Traversable<ListUri> = {
  URI: ListUri,
  alt: (a, b) => (a.length === 0 ? b : a),
  ap,
  chain,
  concat,
  empty: () => [],
  extend: (f, a) => [f(a)],
  filter,
  map,
  of: Array.of,
  reduce,
  zero: () => [],
  equals,
  traverse: <A extends Applicative>(AP: A) => <A, B>(
    f: (a: A) => Type<UriOf<A>, [...TypeParams.DropLast<Type<UriOf<A>>, 1>, B]>,
    list: ReadonlyArray<A>,
  ): Type<UriOf<A>, [...TypeParams.DropLast<Type<UriOf<A>>, 1>, ReadonlyArray<B>]> =>
    reduce(
      (acc: Type<UriOf<A>, [ReadonlyArray<B>]>, a: A) =>
        AP.ap(
          AP.map((as: ReadonlyArray<B>) => (a: B) => [...as, a], acc),
          f(a),
        ),
      AP.of([] as ReadonlyArray<B>),
      list,
    ),
}
