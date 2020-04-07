import { Arity1 } from '@typed/lambda'
import { Type } from '.'

export interface Contravariant<T> {
  readonly contramap: {
    <A, B>(fn: Arity1<A, B>, type: Type<T, [B]>): Type<T, [A]>
    <A, B, C>(fn: Arity1<A, B>, type: Type<T, [C, B]>): Type<T, [C, A]>
    <A, B, C, D>(fn: Arity1<A, B>, type: Type<T, [C, D, B]>): Type<T, [C, D, A]>
    <A, B, C, D, E>(fn: Arity1<A, B>, type: Type<T, [C, D, E, B]>): Type<T, [C, D, E, A]>
    <A, B, C, D, E, F>(fn: Arity1<A, B>, type: Type<T, [C, D, E, F, B]>): Type<T, [C, D, E, F, A]>
    <A, B, C, D, E, F, G>(fn: Arity1<A, B>, type: Type<T, [C, D, E, F, G, B]>): Type<
      T,
      [C, D, E, F, G, A]
    >
  }
}
