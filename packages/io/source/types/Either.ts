import { Either } from '@typed/either'
import * as G from '../guard'
import { Type } from './Type'

const _Either = Type.fromGuard(G.Either, `Either<unknown, unknown>`)

export { _Either as Either }

export const either = <A extends Type, B extends Type>(
  a: A,
  b: B,
): Type<Either<Type.Of<A>, Type.Of<B>>> =>
  Type.fromGuard<Either<Type.Of<A>, Type.Of<B>>>(G.either(a, b), `Either<${a.name}, ${b.name}>`)
