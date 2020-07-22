import { Arity1 } from '@typed/lambda'
import { PossibleValues, Type, Types } from '../Hkt'
import { TypeParams } from '../TypeParams'

export interface Functor<T extends Types> {
  readonly map: <A, B, F extends Type<T, [...PossibleValues, A]>>(
    f: Arity1<A, B>,
    functor: F,
  ) => Type<T, readonly [...TypeParams.DropLast<F, 1>, B]>
}
