import { refinement } from './refinement'
import { Any, Type } from './Type'

export interface ArrayType<A extends Type> extends Type<ReadonlyArray<Type.Of<A>>> {
  readonly member: A
}

const arrayBase = Type.fromGuard(
  { is: (u): u is readonly any[] => Array.isArray(u) },
  '`ReadonlyArray<unknown>',
)

export function array<A extends Any>(type: A, name = `ReadonlyArray<${type.name}>`): ArrayType<A> {
  return {
    ...refinement(
      arrayBase,
      (as): as is ReadonlyArray<Type.Of<A>> => as.every((a) => type.is(a)),
      name,
    ),
    member: type,
  }
}

const _Array: ArrayType<Any> = array(Any, `ReadonlyArray<unknown>`)

export { _Array as Array }
