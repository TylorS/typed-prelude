import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isSet } from '@typed/logic'
import { Type } from '../Type'

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
