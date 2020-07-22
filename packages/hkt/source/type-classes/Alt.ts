import { Arity1 } from '@typed/lambda'
import { L } from 'ts-toolbelt'
import { PossibleValues, Type, Types, ValuesOf } from '../Hkt'

export interface Alt<T extends Types> {
  readonly alt: <A, F extends Type<T, [...PossibleValues, A]>>(
    f: Arity1<A>,
    functor: F,
  ) => Type<T, readonly [...L.Pop<ValuesOf<F>>]>
}
