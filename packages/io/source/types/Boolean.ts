import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isBoolean } from '@typed/logic'
import { Type } from '../Type'

export type BooleanType<E> = Type<'Boolean', E, boolean>
// tslint:disable-next-line:variable-name
export const Boolean: BooleanType<unknown> = {
  name: 'Boolean',
  is: isBoolean,
  *decode(i) {
    if (isBoolean(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'boolean'` }])
  },
  encode: Effect.of,
}
