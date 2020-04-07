import { Type } from './Hkt'
import { Alt } from './Alt'

export interface Plus<T> extends Alt<T> {
  readonly zero: <A>() => Type<T, A>
}
