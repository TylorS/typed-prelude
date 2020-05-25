import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isArray } from '@typed/logic'
import { toString } from '@typed/strings'
import { Mixed, Type } from '../Type'

export type UnknownArrayType<E> = Type<'UnknownArray', E, ReadonlyArray<unknown>>
export const Array: UnknownArrayType<unknown> = {
  name: 'UnknownArray',
  is: isArray,
  *decode(i) {
    if (isArray(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'ReadonlyArray<unknown>'` }])
  },
  encode: Effect.of,
}

export type ArrayType<E, A> = Type<'Array', E, ReadonlyArray<A>>

export function array<A extends Mixed>(type: A): ArrayType<unknown, Type.Output<A>> {
  const is = (u: unknown): u is ReadonlyArray<Type.Output<A>> =>
    Array.is(u) && u.every((v) => type.is(v))

  function* decode(u: unknown) {
    if (is(u)) {
      return Right.of(u)
    }

    return Left.of([{ message: `Expected Array<${type.name}> but received: ${toString(u)}` }])
  }

  return {
    name: 'Array',
    is,
    decode,
    encode: Effect.of,
  }
}
