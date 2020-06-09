import { Either } from '@typed/either'
import * as G from '../guard'
import { Any, Type } from './Type'

export interface EitherType<A extends Type, B extends Type>
  extends Type<Either<Type.Of<A>, Type.Of<B>>> {
  readonly left: A
  readonly right: B
}

export const either = <A extends Type, B extends Type>(left: A, right: B): EitherType<A, B> => {
  const type = Type.fromGuard<Either<Type.Of<A>, Type.Of<B>>>(
    G.either(left, right),
    `Either<${left.name}, ${right.name}>`,
    `Either<${left.expected}, ${right.expected}>`,
  )

  return { ...type, left, right }
}

const _Either = either(Any, Any)

export { _Either as Either }
