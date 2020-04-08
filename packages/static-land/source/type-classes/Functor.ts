import { Arity1 } from '@typed/lambda'
import { Type, Types } from '.'

export interface Functor<T extends Types> {
  readonly map: {
    <A, B>(fn: Arity1<A, B>, functor: Type<T, [A]>): Type<T, [B]>
    <A, B, C>(fn: Arity1<A, B>, functor: Type<T, [C, A]>): Type<T, [C, B]>
    <A, B, C, D>(fn: Arity1<A, B>, functor: Type<T, [C, D, A]>): Type<T, [C, D, B]>
    <A, B, C, D, E>(fn: Arity1<A, B>, functor: Type<T, [C, D, E, A]>): Type<T, [C, D, E, B]>
    <A, B, C, D, E, F>(fn: Arity1<A, B>, functor: Type<T, [C, D, E, F, A]>): Type<
      T,
      [C, D, E, F, B]
    >
  }
}
