import { Match } from '@typed/logic'
import { fromJust, isJust, isNothing, Maybe, Nothing } from '@typed/maybe'
import { describe, given, it, Test } from '@typed/test'
import { createRoute } from './createRoute'
import { nestMatch } from './nestMatch'
import { Path } from './types'

export const test: Test = describe(`nestMatch`, [
  given(`a Match<Href, A> -> Route<B>`, [
    it(`returns a Match<Href, A & B>`, ({ ok, equal }) => {
      const match: Match<string, { foo: number }> = (a: string) =>
        a === '/foo' ? Maybe.of({ foo: 1 }) : Nothing
      const route = createRoute<{ id: string }>('/user/:id/')
      const sut = nestMatch(route, match)

      const validPath = '/user/42/foo' as Path
      const actualValidPathParams = sut(validPath)

      ok(isJust(actualValidPathParams))

      if (isJust(actualValidPathParams)) {
        equal([{ id: '42' }, { foo: 1 }], fromJust(actualValidPathParams))
      }

      ok(isNothing(sut('/user/42' as Path)))
    }),
  ]),
])
