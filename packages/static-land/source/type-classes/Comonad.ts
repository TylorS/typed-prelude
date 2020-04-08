import { Type, Types } from './Hkt'
import { Extend } from './Extend'

export interface Comonad<T extends Types> extends Extend<T> {
  readonly extract: {
    <A>(type: Type<T, [A]>): A
    <A, B>(type: Type<T, [A, B]>): B
    <A, B, C>(type: Type<T, [A, B, C]>): C
    <A, B, C, D>(type: Type<T, [A, B, C, D]>): D
    <A, B, C, D, E>(type: Type<T, [A, B, C, D, E]>): E
  }
}
