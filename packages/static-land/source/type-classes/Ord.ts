import { Type } from './Hkt'
import { Setoid } from './Setoid'

export interface Ord<T> extends Setoid<T> {
  readonly lte: <A>(a: Type<T, A>, b: Type<T, A>) => boolean
}
