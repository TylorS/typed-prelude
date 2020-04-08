import { Type, Types, Values } from './Hkt'

export interface Setoid<T extends Types> {
  readonly equals: <A extends Values>(a: Type<T, A>, b: Type<T, A>) => boolean
}
