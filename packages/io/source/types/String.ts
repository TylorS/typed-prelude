import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isString } from '@typed/logic'
import { Type } from '../Type'

export type StringType<E> = Type<'String', E, string>
// tslint:disable-next-line:variable-name
export const String: StringType<unknown> = {
  name: 'String',
  is: isString,
  *decode(i) {
    if (isString(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'string'` }])
  },
  encode: Effect.of,
}
