import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isUndefined } from '@typed/logic'
import { Type } from '../Type'

export type UndefinedType<E> = Type<'Undefined', E, undefined>
// tslint:disable-next-line:variable-name
export const Undefined: UndefinedType<unknown> = {
  name: 'Undefined',
  is: isUndefined,
  *decode(i) {
    if (isUndefined(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'undefined'` }])
  },
  encode: Effect.of,
}
