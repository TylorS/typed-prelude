import { IO } from '@typed/lambda'
import { PossibleValues, Type, Types } from '../Hkt'

export interface Alt<T extends Types> {
  readonly alt: <A extends Type<T, PossibleValues>, B extends Type<T, PossibleValues>>(
    f: IO<A>,
    functor: B,
  ) => A | B
}
