import { Env, map } from '@typed/env'
import { Functor } from '../type-classes'
import { TypeParams } from '../TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Env: Env<TypeParams.Second<Values>, TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Env: [T] extends [Env<infer A, infer B>] ? [A, B] : never
  }
}

export const env: Functor<'Env'> = {
  map: map as Functor<'Env'>['map'],
}
