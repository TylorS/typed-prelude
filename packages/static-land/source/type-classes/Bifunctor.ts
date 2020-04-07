import { Type } from './Hkt'
import { Arity1 } from '@typed/lambda'
import { Functor } from './Functor'

export interface Bifunctor<T> extends Functor<T> {
  readonly bimap: {
    <A, B, C, D>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [A, C]>): Type<T, [B, D]>
    <A, B, C, D, E>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [E, A, C]>): Type<T, [E, B, D]>
    <A, B, C, D, E, F>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [E, F, A, C]>): Type<
      T,
      [E, F, B, D]
    >
    <A, B, C, D, E, F, G>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [E, F, G, A, C]>): Type<
      T,
      [E, F, G, B, D]
    >
  }
}
