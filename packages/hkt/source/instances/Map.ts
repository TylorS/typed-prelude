import * as M from '@typed/map'
import { Functor } from '../type-classes'
import { TypeParams } from '../TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Map: ReadonlyMap<TypeParams.Second<Values>, TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Map: T extends ReadonlyMap<infer A, infer B> ? [A, B] : never
  }
}

export const map: Functor<'Map'> = {
  map: M.map as Functor<'Map'>['map'],
}
