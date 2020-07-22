import { map, Maybe } from '@typed/maybe'
import { Functor } from '../type-classes/Functor'
import { TypeParams } from './TypeParams'

declare module '../type-classes/Hkt' {
  export interface Hkts<Values> {
    readonly Maybe: Maybe<TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Maybe: () => T extends Maybe<infer R> ? [R] : never
  }
}

export const maybe: Functor<'Maybe'> = {
  map,
}
