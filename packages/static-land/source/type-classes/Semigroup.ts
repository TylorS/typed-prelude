import { Type, Types, Values } from './Hkt'

export interface Semigroup<T extends Types> {
  readonly concat: <A extends Values>(a: Type<T, A>, b: Type<T, A>) => Type<T, A>
}
