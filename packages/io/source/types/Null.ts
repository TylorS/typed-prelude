import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isNull } from '@typed/logic'
import { Type } from '../Type'

export type NullType<E> = Type<'Null', E, null>
export const Null: NullType<unknown> = {
  name: 'Null',
  is: isNull,
  *decode(i) {
    if (isNull(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'null'` }])
  },
  encode: Effect.of,
}
