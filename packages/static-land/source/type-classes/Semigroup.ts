import { Type } from './Hkt'

export interface Semigroup<T> {
  readonly concat: <A>(a: Type<T, A>, b: Type<T, A>) => Type<T, A>
}
