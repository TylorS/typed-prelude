import { ap, chain, Just, map, Maybe, race } from '@typed/maybe'
import { Alt, Monad, TypeParams } from 'hkt-ts'

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

export const maybe: Monad<MaybeUri> & Alt<MaybeUri> = {
  URI: MaybeUri,
  map,
  alt: race,
  chain,
  ap,
  of: Just.of,
}
