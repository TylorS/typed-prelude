import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { equals, isBoolean } from '@typed/logic'
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

export type TrueType<E> = Type<'True', E, true>

export const True: TrueType<unknown> = {
  name: 'True',
  is: equals(true),
  *decode(i) {
    if (equals(true as const, i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected true` }])
  },
  encode: Effect.of,
}

export type FalseType<E> = Type<'False', E, false>

export const False: FalseType<unknown> = {
  name: 'False',
  is: equals(false),
  *decode(i) {
    if (equals(false as const, i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected false` }])
  },
  encode: Effect.of,
}
