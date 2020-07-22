import { map, Route } from '@typed/routing'
import { Functor } from '../type-classes'
import { TypeParams } from './TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Route: Route<TypeParams.Second<Values>, TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Route: T extends Route<infer A, infer B> ? [A, B] : never
  }
}

export const route: Functor<'Route'> = {
  map,
}
