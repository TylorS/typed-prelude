import { always } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'
import { describe, given, it, Test } from '@typed/test'
import { findLast } from './index'

export const test: Test = describe(`findLast`, [
  given(`a Predicate and a List`, [
    it(`returns a Nothing when not found`, ({ equal }) => {
      equal(Nothing, findLast(always(false), [1, 2, 3]))
    }),

    it(`returns a Maybe.of(value) when found`, ({ equal }) => {
      equal(Maybe.of(3), findLast(always(true), [1, 2, 3]))
    }),
  ]),
])
