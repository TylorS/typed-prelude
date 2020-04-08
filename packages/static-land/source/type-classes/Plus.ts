import { Type, Types, Values } from './Hkt'
import { Alt } from './Alt'

export interface Plus<T extends Types> extends Alt<T> {
  readonly zero: <A extends Values>() => Type<T, A>
}
