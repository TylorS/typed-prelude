import { Future, map } from '@typed/future'
import { Functor } from '../type-classes/Functor'
import { TypeParams } from './TypeParams'

declare module '../type-classes/Hkt' {
  export interface Hkts<Values> {
    readonly Future: Future<
      TypeParams.Third<Values>,
      TypeParams.Second<Values>,
      TypeParams.First<Values>
    >
  }

  export interface HktValues<T> {
    readonly Future: () => T extends Future<infer E, infer A, infer B> ? [E, A, B] : never
  }
}

export const future: Functor<'Future'> = {
  map,
}
