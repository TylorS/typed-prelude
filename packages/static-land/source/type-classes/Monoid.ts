import { Type, Values } from './Hkt'
import { Semigroup } from './Semigroup'

export interface Monoid<T> extends Semigroup<T> {
  readonly empty: () => Type<T, Values>
}
