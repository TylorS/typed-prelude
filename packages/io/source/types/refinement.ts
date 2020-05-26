import { Left, Right } from '@typed/either'
import { Refinement } from '@typed/lambda'
import { toString } from '@typed/strings'
import { Any, Type } from '../Type'

export function refinement<A extends Any<any>, B extends Type.Of<A>>(
  type: A,
  refinementF: Refinement<Type.Of<A>, B>,
): Type<
  Type.Name<A>,
  unknown,
  B,
  Type.Input<A>,
  Type.Output<A> extends Type.Of<A> ? B : Type.Output<A>
>

export function refinement<
  A extends Any<any>,
  B extends Type.Of<A>,
  Name extends string = Type.Name<A>
>(
  type: A,
  refinementF: Refinement<Type.Of<A>, B>,
  name: Name,
): Type<Name, unknown, B, Type.Input<A>, Type.Output<A> extends Type.Of<A> ? B : Type.Output<A>>

export function refinement<
  A extends Any<any>,
  B extends Type.Of<A>,
  Name extends string = Type.Name<A>
>(
  type: A,
  refinementF: Refinement<Type.Of<A>, B>,
  name: Name = type.name as Name,
): Type<Name, unknown, B, Type.Input<A>, Type.Output<A> extends Type.Of<A> ? B : Type.Output<A>> {
  const is = (u: unknown): u is B => type.is(u) && refinementF(u)

  function* decode(u: unknown) {
    if (is(u)) {
      return Right.of(u)
    }

    return Left.of([{ message: `Expected '${name}' but received: ${toString(u)}` }])
  }

  return {
    name,
    is,
    decode,
    encode: type.encode,
  }
}
