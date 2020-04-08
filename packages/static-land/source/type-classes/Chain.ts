import { Arity1 } from '@typed/lambda'
import { Type, Types } from './Hkt'
import { Apply } from './Apply'

export interface Chain<T extends Types> extends Apply<T> {
  readonly chain: {
    <A, B>(fn: Arity1<A, Type<T, [B]>>, type: Type<T, [A]>): Type<T, [B]>
    <A, B, C>(fn: Arity1<A, Type<T, [B, C]>>, type: Type<T, [B, A]>): Type<T, [B, C]>
    <A, B, C, D>(fn: Arity1<A, Type<T, [B, C, D]>>, type: Type<T, [B, C, A]>): Type<T, [B, C, D]>
    <A, B, C, D, E>(fn: Arity1<A, Type<T, [B, C, D, E]>>, type: Type<T, [B, C, D, A]>): Type<
      T,
      [B, C, D, E]
    >
    <A, B, C, D, E, F>(
      fn: Arity1<A, Type<T, [B, C, D, E, F]>>,
      type: Type<T, [B, C, D, E, A]>,
    ): Type<T, [B, C, D, E, F]>
  }
}
