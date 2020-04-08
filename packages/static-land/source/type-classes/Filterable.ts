import { Predicate } from '@typed/lambda'
import { Type, Types } from './Hkt'

export interface Filterable<T extends Types> {
  readonly filter: {
    <A>(predicate: Predicate<A>, t: Type<T, [A]>): Type<T, [A]>
    <A, B>(predicate: Predicate<A>, t: Type<T, [B, A]>): Type<T, [B, A]>
    <A, B, C>(predicate: Predicate<A>, t: Type<T, [B, C, A]>): Type<T, [B, C, A]>
    <A, B, C, D>(predicate: Predicate<A>, t: Type<T, [B, C, D, A]>): Type<T, [B, C, D, A]>
    <A, B, C, D, E>(predicate: Predicate<A>, t: Type<T, [B, C, D, E, A]>): Type<T, [B, C, D, E, A]>
  }
}
