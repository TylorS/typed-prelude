import { refinement } from './refinement'
import { Any, Type } from './Type'

export const Array: ArrayType<Any> = array(Any, `ReadonlyArray<unknown>`)

export interface ArrayType<A extends Type> extends Type<ReadonlyArray<Type.Of<A>>> {
  readonly member: A
}

export function array<A extends Any>(type: A, name = `ReadonlyArray<${type.name}>`): ArrayType<A> {
  return {
    ...refinement(
      Array,
      (as): as is ReadonlyArray<Type.Of<A>> => as.every((a) => type.is(a)),
      name,
    ),
    member: type,
  }
}
