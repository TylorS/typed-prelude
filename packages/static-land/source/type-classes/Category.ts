import { Type, Types } from './Hkt'
import { Semigroupoid } from './Semigroupoid'

export interface Category<T extends Types> extends Semigroupoid<T> {
  readonly id: {
    <A>(): Type<T, [A]>
    <A, B>(): Type<T, [A, B]>
    <A, B>(): Type<T, [A, B]>
    <A, B, C, D>(): Type<T, [A, B, C, D]>
    <A, B, C, D, E>(): Type<T, [A, B, C, D, E]>
  }
}
