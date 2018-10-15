import { describe, given, it, Test } from '@typed/test'
import { createRoute } from './createRoute'
import { stripRoute } from './stripRoute'

export const test: Test = describe(`stripRoute`, [
  given(`a pathname and a route`, [
    it(`returns a pathname with route match removed`, ({ equal }) => {
      const path = `/user/42/profile/settings`
      const strip = stripRoute(path)

      equal('/profile/settings', strip(createRoute('/user/:userId')))
      equal('/settings', strip(createRoute('/user/:userId/profile/')))
      equal(path, strip(createRoute('/foo')))
    }),
  ]),
])
