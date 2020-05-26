import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isSet } from '@typed/logic'
import { Any, Type, TypeOf } from '../Type'
import { array } from './Array'

export type UnknownSetType<E> = Type<'UnknownSet', E, ReadonlySet<unknown>>
export const Set: UnknownSetType<unknown> = {
  name: 'UnknownSet',
  is: isSet,
  *decode(i) {
    if (isSet(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'ReadonlySet<unknown>'` }])
  },
  encode: Effect.of,
}

export type SetType<E, Name extends string, A> = Type<Name, E, ReadonlySet<A>>

export function set<A extends Any, Name extends string = 'Set'>(
  type: A,
  name: Name = 'Set' as Name,
): SetType<unknown, Name, TypeOf<A>> {
  const arrayType = array(type)
  const isSet = (u: unknown): u is ReadonlySet<TypeOf<A>> =>
    Set.is(u) && arrayType.is(Array.from(u))

  return {
    name,
    is: isSet,
    *decode(i) {
      if (isSet(i)) {
        return Right.of(i)
      }

      return Left.of([{ message: `Expected 'ReadonlySet<${type.name}>'` }])
    },
    encode: Effect.of,
  }
}
