import { Type, Types, Values } from './Hkt'
import { Setoid } from './Setoid'

export interface Ord<T extends Types> extends Setoid<T> {
  readonly lte: <A extends Values>(a: Type<T, A>, b: Type<T, A>) => boolean
}
