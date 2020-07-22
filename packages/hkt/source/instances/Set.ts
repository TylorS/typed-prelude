import { map } from '@typed/set'
import { Functor } from '../type-classes'
import { TypeParams } from './TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Set: ReadonlySet<TypeParams.First<Values>>
  }

  export interface HktValues<T> {
    readonly Set: T extends ReadonlySet<infer R> ? [R] : never
  }
}

export const set: Functor<'Set'> = {
  map,
}
