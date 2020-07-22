import { map } from '@typed/list'
import { Functor } from '../type-classes/Functor'
import { TypeParams } from './TypeParams'

declare module '../type-classes/Hkt' {
  export interface Hkts<Values> {
    readonly List: ReadonlyArray<TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly List: () => T extends ReadonlyArray<infer R> ? [R] : never
  }
}

export const list: Functor<'List'> = {
  map,
}
