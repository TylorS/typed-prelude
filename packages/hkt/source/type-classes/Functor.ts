import { Arity1 } from '@typed/lambda'
import { Type, Types } from '../Hkt'

export interface Functor<T extends Types> {
  readonly map: <A, B, Values extends ReadonlyArray<any>>(
    f: Arity1<A, B>,
    functor: Type<T, readonly [...Values, A]>,
  ) => Type<T, readonly [...Values, B]>
}
