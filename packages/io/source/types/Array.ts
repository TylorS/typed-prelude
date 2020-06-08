import { refinement } from './refinement'
import { Mixed, Type } from './Type'

export const Array: ArrayType<Mixed> = array(Mixed, `ReadonlyArray<unknown>`)

export interface ArrayType<A extends Type> extends Type<ReadonlyArray<Type.Of<A>>> {
  readonly memberType: A
}

export function array<A extends Mixed>(
  type: A,
  name = `ReadonlyArray<${type.name}>`,
): ArrayType<A> {
  return {
    ...refinement(
      Array,
      (as): as is ReadonlyArray<Type.Of<A>> => as.every((a) => type.is(a)),
      name,
    ),
    memberType: type,
  }
}
