import { describe, given, it, Test } from '@typed/test'
import { Match } from '../logic'
import { fromJust, isJust, isNothing, Maybe, Nothing } from '../maybe'
import { createRoute } from './createRoute'
import { nestMatch } from './nestMatch'

export const test: Test = describe(`nestMatch`, [
  given(`a Match<Href, A> -> Route<B>`, [
    it(`returns a Match<Href, A & B>`, ({ ok, equal }) => {
      const match: Match<string, { foo: number }> = (a: string) =>
        a === '/foo' ? Maybe.of({ foo: 1 }) : Nothing
      const route = createRoute<{ id: number }>('/user/:id/')
      const sut = nestMatch(match, route)

      const validPath = '/user/42/foo'
      const expectedValidParams = { id: 42, foo: 1 }

      const actualValidPathParams = sut(validPath)

      ok(isJust(actualValidPathParams))

      if (isJust(actualValidPathParams)) {
        equal(expectedValidParams, fromJust(actualValidPathParams))
      }

      ok(isNothing(sut('/user/42')))
    }),
  ]),
])
