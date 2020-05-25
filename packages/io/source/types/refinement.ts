import { Left, Right } from '@typed/either'
import { Refinement } from '@typed/lambda'
import { toString } from '@typed/strings'
import { Any, Type } from '../Type'

export function refinement<A extends Any<any>, B extends Type.Of<A>, Name extends string>(
  type: A,
  refinementF: Refinement<Type.Of<A>, B>,
  name: Name,
): Type<Name, unknown, B, Type.Input<A>, Type.Output<A> extends Type.Of<A> ? B : Type.Output<A>> {
  const is = (u: unknown): u is B => type.is(u) && refinementF(u)

  function* decode(u: unknown) {
    if (is(u)) {
      return Right.of(u)
    }

    return Left.of([{ message: `Expected '${type.name}' but received: ${toString(u)}` }])
  }

  return {
    name,
    is,
    decode,
    encode: type.encode,
  }
}
