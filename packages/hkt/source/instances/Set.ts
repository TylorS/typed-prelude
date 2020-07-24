import { map } from '@typed/set'
import { Functor } from 'hkt-ts'

export const SetUri = '@typed/set' as const
export type SetUri = typeof SetUri

declare module 'hkt-ts' {
  export interface Hkts<Params> {
    readonly [SetUri]: ReadonlySet<TypeParams.First<Params>>
  }

  export interface HktTypeParams<T> {
    readonly [SetUri]: [T] extends [ReadonlySet<infer R>]
      ? [R]
      : [T] extends [Set<infer R>]
      ? [R]
      : never
  }
}

export const set: Functor<SetUri> = {
  URI: SetUri,
  map,
}
