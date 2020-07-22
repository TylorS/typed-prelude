import { map, Maybe } from '@typed/maybe'
import { Functor } from '../type-classes'
import { TypeParams } from './TypeParams'

declare module '../Hkt' {
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
