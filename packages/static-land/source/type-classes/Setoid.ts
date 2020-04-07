import { Type } from './Hkt'

export interface Setoid<T> {
  readonly equals: <A>(a: Type<T, A>, b: Type<T, A>) => boolean
}
