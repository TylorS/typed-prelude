import { Type } from './Hkt'
import { Monoid } from './Monoid'

export interface Group<T> extends Monoid<T> {
  readonly invert: <A>(a: Type<T, A>) => Type<T, A>
}
