import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { Is } from '@typed/lambda'
import { isUndefined } from '@typed/logic'
import { Type } from '../Type'

export type VoidType<E> = Type<'Void', E, void>
export const Void: VoidType<unknown> = {
  name: 'Void',
  is: isUndefined as Is<void>,
  *decode(i) {
    if (isUndefined(i)) {
      return Right.of(i as void)
    }

    return Left.of([{ message: `Expected 'void'` }])
  },
  encode: Effect.of,
}
