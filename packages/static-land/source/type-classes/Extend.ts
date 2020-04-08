import { Arity1 } from '@typed/lambda'
import { Type, Types } from './Hkt'
import { Functor } from './Functor'

export interface Extend<T extends Types> extends Functor<T> {
  readonly extend: {
    <A, B>(fn: Arity1<Type<T, [A]>, B>, type: Type<T, [A]>): Type<T, [B]>
    <A, B, C>(fn: Arity1<Type<T, [A, B]>, C>, type: Type<T, [A, B]>): Type<T, [A, C]>
    <A, B, C, D>(fn: Arity1<Type<T, [A, B, C]>, D>, type: Type<T, [A, B, C]>): Type<T, [A, B, D]>
    <A, B, C, D, E>(fn: Arity1<Type<T, [A, B, C, D]>, E>, type: Type<T, [A, B, C, D]>): Type<
      T,
      [A, B, C, E]
    >
    <A, B, C, D, E, F>(
      fn: Arity1<Type<T, [A, B, C, D, E]>, F>,
      type: Type<T, [A, B, C, D, E]>,
    ): Type<T, [A, B, C, D, F]>
  }
}
