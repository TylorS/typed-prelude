import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isNumber } from '@typed/logic'
import { Type } from '../Type'

export type NumberType<E> = Type<'Number', E, number>
// tslint:disable-next-line:variable-name
export const Number: NumberType<unknown> = {
  name: 'Number',
  is: isNumber,
  *decode(i) {
    if (isNumber(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'number'` }])
  },
  encode: Effect.of,
}
