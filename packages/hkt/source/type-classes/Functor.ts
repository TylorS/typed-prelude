import { Arity1 } from '@typed/lambda'
import { L } from 'ts-toolbelt'
import { PossibleValues, Type, Types, ValuesOf } from '../Hkt'

export interface Functor<T extends Types> {
  readonly map: <A, B, F extends Type<T, [...PossibleValues, A]>>(
    f: Arity1<A, B>,
    functor: F,
  ) => Type<T, readonly [...L.Pop<ValuesOf<F>>, B]>
}
