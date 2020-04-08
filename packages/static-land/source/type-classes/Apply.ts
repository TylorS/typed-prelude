import { Type, Types } from './Hkt'
import { Arity1 } from '@typed/lambda'
import { Functor } from './Functor'

export interface Apply<T extends Types> extends Functor<T> {
  readonly ap:
    | (<A, B>(fn: Type<T, [Arity1<A, B>]>, value: Type<T, [A]>) => Type<T, [B]>)
    | (<A, B, C>(fn: Type<T, [A, Arity1<B, C>]>, value: Type<T, [A, B]>) => Type<T, [A, C]>)
    | (<A, B, C, D>(
        fn: Type<T, [A, B, Arity1<C, D>]>,
        value: Type<T, [A, B, C]>,
      ) => Type<T, [A, B, D]>)
    | (<A, B, C, D, E>(
        fn: Type<T, [A, B, C, Arity1<D, E>]>,
        value: Type<T, [A, B, C, D]>,
      ) => Type<T, [A, B, C, E]>)
    | (<A, B, C, D, E, F>(
        fn: Type<T, [A, B, C, D, Arity1<E, F>]>,
        value: Type<T, [A, B, C, D, E]>,
      ) => Type<T, [A, B, C, D, F]>)
}
