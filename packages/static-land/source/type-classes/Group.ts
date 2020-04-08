import { Type, Types, Values } from './Hkt'
import { Monoid } from './Monoid'

export interface Group<T extends Types> extends Monoid<T> {
  readonly invert: <A extends Values>(a: Type<T, A>) => Type<T, A>
}
