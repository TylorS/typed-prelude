import { Arity2 } from '@typed/lambda'
import { Type, Types } from './Hkt'

export interface Foldable<T extends Types> {
  readonly reduce: {
    <A, B>(reducer: Arity2<A, B>, seed: A, type: Type<T, [B]>): A
    <A, B, C>(reducer: Arity2<A, B>, seed: A, type: Type<T, [C, B]>): A
    <A, B, C, D>(reducer: Arity2<A, B>, seed: A, type: Type<T, [C, D, B]>): A
    <A, B, C, D, E>(reducer: Arity2<A, B>, seed: A, type: Type<T, [C, D, E, B]>): A
    <A, B, C, D, E, F>(reducer: Arity2<A, B>, seed: A, type: Type<T, [C, D, E, F, B]>): A
  }
}
