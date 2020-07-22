import { Arity1 } from '@typed/lambda'
import * as O from '@typed/objects'
import { Functor } from '../type-classes'
import { TypeParams } from '../TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Record: Record<TypeParams.Second<Values>, TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Record: T extends Record<infer A, infer B> ? [A, B] : never
  }
}

const map = <K extends PropertyKey, A, B>(f: Arity1<A, B>, record: Record<K, A>): Record<K, B> =>
  O.mapObj((_, value) => f(value), record)

export const record: Functor<'Record'> = {
  map: map as Functor<'Record'>['map'],
}
