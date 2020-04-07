import { Type } from './Hkt'

export interface Applicative<T> {
  readonly of: {
    <A>(value: A): Type<T, [A]>
    <A, B>(value: B): Type<T, [A, B]>
    <A, B, C>(value: C): Type<T, [A, B, C]>
    <A, B, C, D>(value: D): Type<T, [A, B, C, D]>
    <A, B, C, D, E>(value: E): Type<T, [A, B, C, D, E]>
  }
}
