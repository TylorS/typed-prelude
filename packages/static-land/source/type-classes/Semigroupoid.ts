import { Type, Types } from './Hkt'

export interface Semigroupoid<T extends Types> {
  readonly compose: <A, B, C>(ab: Type<T, [A, B]>, bc: Type<T, [B, C]>) => Type<T, [A, C]>
}
