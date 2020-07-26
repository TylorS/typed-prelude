import { ap, chain, Just, map, Maybe, Nothing, race, unpack } from '@typed/maybe'
import { Alt, Alternative, Extend, Filterable, Foldable, Monad, TypeParams } from 'hkt-ts'

export const MaybeUri = '@typed/maybe' as const
export type MaybeUri = typeof MaybeUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    readonly [MaybeUri]: Maybe<TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [MaybeUri]: [T] extends [Maybe<infer R>] ? [R] : never
  }
}

export const maybe: Monad<MaybeUri> &
  Alt<MaybeUri> &
  Alternative<MaybeUri> &
  Foldable<MaybeUri> &
  Extend<MaybeUri> &
  Filterable<MaybeUri> = {
  URI: MaybeUri,
  map,
  alt: race,
  chain,
  ap,
  of: Just.of,
  zero: () => Nothing,
  reduce: (f, a, m) =>
    unpack(
      (b) => f(a, b),
      () => a,
      m,
    ),
  extend: (f, m) => Just.of(f(m)),
  filter: (p, m) =>
    unpack(
      (a) => (p(a) ? Just.of(a) : Nothing),
      () => Nothing,
      m,
    ),
}
