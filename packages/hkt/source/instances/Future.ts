import { Future, map, PureFuture } from '@typed/future'
import { Functor } from '../type-classes'
import { TypeParams } from '../TypeParams'

declare module '../Hkt' {
  export interface Hkts<Values> {
    readonly Future: Future<
      TypeParams.Third<Values>,
      TypeParams.Second<Values>,
      TypeParams.First<Values>
    >
  }

  export interface HktValues<T> {
    readonly Future: [T] extends [PureFuture<infer A, infer B>]
      ? [unknown, A, B]
      : [T] extends [Future<infer E, infer A, infer B>]
      ? [E, A, B]
      : never
  }
}

export const future: Functor<'Future'> = {
  map,
}
