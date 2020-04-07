import { Applicative } from './Applicative'
import { Arity1 } from '@typed/lambda'
import { Type } from './Hkt'

export interface Traversable<T> extends Applicative<T> {
  readonly traverse: {
    <U, A, B>(applicative: Applicative<U>, f: Arity1<A, Type<U, [B]>>, type: Type<T, [A]>): Type<
      U,
      Type<T, [B]>
    >
    <U, A, B, C>(
      applicative: Applicative<U>,
      f: Arity1<A, Type<U, [C, B]>>,
      type: Type<T, [C, A]>,
    ): Type<U, Type<T, [C, B]>>
    <U, A, B, C, D>(
      applicative: Applicative<U>,
      f: Arity1<A, Type<U, [C, D, B]>>,
      type: Type<T, [C, D, A]>,
    ): Type<U, Type<T, [C, D, B]>>
    <U, A, B, C, D, E>(
      applicative: Applicative<U>,
      f: Arity1<A, Type<U, [C, D, E, B]>>,
      type: Type<T, [C, D, E, A]>,
    ): Type<U, Type<T, [C, D, E, B]>>
    <U, A, B, C, D, E, F>(
      applicative: Applicative<U>,
      f: Arity1<A, Type<U, [C, D, E, F, B]>>,
      type: Type<T, [C, D, E, F, A]>,
    ): Type<U, Type<T, [C, D, E, F, B]>>
  }
}
