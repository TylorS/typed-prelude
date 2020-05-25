import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isMap } from '@typed/logic'
import { Type } from '../Type'

export type UnknownMapType<E> = Type<'UnknownMap', E, ReadonlyMap<unknown, unknown>>
export const Map: UnknownMapType<unknown> = {
  name: 'UnknownMap',
  is: isMap,
  *decode(i) {
    if (isMap(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'ReadonlyMap<unknown, unknown>'` }])
  },
  encode: Effect.of,
}
