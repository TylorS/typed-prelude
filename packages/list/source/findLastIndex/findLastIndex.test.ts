import { always } from '@typed/lambda'
import { Nothing, withDefault } from '@typed/maybe'
import { describe, given, it, Test } from '@typed/test'
import { findLastIndex } from './index'

export const test: Test = describe(`findLast`, [
  given(`a Predicate and a List`, [
    it(`returns a Nothing when not found`, ({ equal }) => {
      equal(Nothing, findLastIndex(always(false), [1, 2, 3]))
    }),

    it(`returns a Maybe.of(value) when found`, ({ equal }) => {
      equal(
        1,
        withDefault(
          null,
          findLastIndex((x) => x === 2, [1, 2, 3]),
        ),
      )
    }),
  ]),
])
