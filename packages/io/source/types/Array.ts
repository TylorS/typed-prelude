import * as G from '../guard'
import { refinement } from './refinement'
import { Mixed, Type } from './Type'

export const Array: ArrayType<unknown> = Type.fromGuard(
  G.Array,
  `UnknownArray`,
  `ReadonlyArray<unknown>`,
)

export type ArrayType<A> = Type<ReadonlyArray<A>>

export function array<A extends Mixed>(
  type: A,
  name = `ReadonlyArray<${type.name}>`,
): ArrayType<Type.Of<A>> {
  return refinement(
    Array,
    (as): as is ReadonlyArray<Type.Of<A>> => as.every((a) => type.is(a)),
    name,
  )
}
