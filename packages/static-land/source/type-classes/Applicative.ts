import { Type, Types } from './Hkt'
import { Apply } from './Apply'

export interface Applicative<T extends Types> extends Apply<T> {
  readonly of: {
    <A>(value: A): Type<T, [A]>
    <A, B>(value: B): Type<T, [A, B]>
    <A, B, C>(value: C): Type<T, [A, B, C]>
    <A, B, C, D>(value: D): Type<T, [A, B, C, D]>
    <A, B, C, D, E>(value: E): Type<T, [A, B, C, D, E]>
  }
}
