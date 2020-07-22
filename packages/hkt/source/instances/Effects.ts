import { Effects, map } from '@typed/effects'
import { Functor } from '../type-classes'
import { TypeParams } from '../TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Effect: Effects<TypeParams.Second<Values>, TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Effect: [T] extends [Effects<infer A, infer B>] ? [A, B] : never
  }
}

export const effect: Functor<'Effect'> = {
  map: map as Functor<'Effect'>['map'],
}
