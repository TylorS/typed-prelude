import { Effect } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { ComparableValues } from '@typed/lambda'
import { equals } from '@typed/logic'
import { toString } from '@typed/strings'
import { Type } from '../Type'

export type LiteralType<E, A> = Type<'Literal', E, A>

export function literal<A extends ComparableValues>(value: A): LiteralType<unknown, A> {
  const is = equals(value)

  return {
    name: 'Literal',
    is,
    *decode(i) {
      if (is(i)) {
        return Right.of(i)
      }

      return Left.of([{ message: `Expected '${toString(value)}'` }])
    },
    encode: Effect.of,
  }
}
