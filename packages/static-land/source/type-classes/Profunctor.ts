import { Arity1 } from '@typed/lambda'
import { Type, Types } from './Hkt'
import { Functor } from './Functor'

export interface Profunctor<T extends Types> extends Functor<T> {
  readonly promap: {
    <A, B, C, D>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [B, C]>): Type<T, [A, D]>
    <A, B, C, D, E>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [E, B, C]>): Type<T, [E, A, D]>
    <A, B, C, D, E, F>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [E, F, B, C]>): Type<
      T,
      [E, F, A, D]
    >
    <A, B, C, D, E, F, G>(f: Arity1<A, B>, g: Arity1<C, D>, type: Type<T, [E, F, G, B, C]>): Type<
      T,
      [E, F, G, A, D]
    >
  }
}
