import { ap, chain, concat, map } from '@typed/set'
import { Monad, Monoid, TypeParams } from 'hkt-ts'

export const SetUri = '@typed/set' as const
export type SetUri = typeof SetUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    [SetUri]: ReadonlySet<TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    [SetUri]: [T] extends [ReadonlySet<infer R>] ? [R] : [T] extends [Set<infer R>] ? [R] : never
  }
}

export const set: Monad<SetUri> & Monoid<SetUri> = {
  URI: SetUri,
  of: <A>(value: A) => new Set([value]),
  empty: <A>() => new Set<A>(),
  map,
  chain,
  ap,
  concat,
}
