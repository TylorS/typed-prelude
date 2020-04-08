import { Type, Values, Types } from './Hkt'
import { Semigroup } from './Semigroup'

export interface Monoid<T extends Types> extends Semigroup<T> {
  readonly empty: () => Type<T, Values>
}
