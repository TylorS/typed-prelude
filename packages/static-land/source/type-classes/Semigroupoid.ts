import { Type } from './Hkt'

export interface Semigroupoid<T> {
  readonly compose: <A, B, C>(ab: Type<T, [A, B]>, bc: Type<T, [B, C]>) => Type<T, [A, C]>
}
