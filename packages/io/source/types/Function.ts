import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isFunction } from '@typed/logic'
import { Type } from '../Type'

export type FunctionType<E, A extends Function = Function> = Type<'Function', E, A>
export const Function: FunctionType<unknown> = {
  name: 'Function',
  is: isFunction,
  *decode(i) {
    if (isFunction(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'Function'` }])
  },
  encode: Effect.of,
}
