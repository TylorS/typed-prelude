import { map } from '@typed/list'
import { Functor, TypeParams } from 'hkt-ts'

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

export const list: Functor<ListUri> = {
  URI: ListUri,
  map,
}
