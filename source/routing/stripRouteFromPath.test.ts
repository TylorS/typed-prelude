import { describe, given, it, Test } from '@typed/test'
import { createRoute } from './createRoute'
import { stripRouteFromPath } from './stripRouteFromPath'

export const test: Test = describe(`stripRouteFromPath`, [
  given(`a path and a route`, [
    it(`returns a pathname with route match removed`, ({ equal }) => {
      const path = `/user/42/profile/settings`
      const strip = stripRouteFromPath(path)

      equal('/profile/settings', strip(createRoute('/user/:userId')))
      equal('/settings', strip(createRoute('/user/:userId/profile/')))
      equal(path, strip(createRoute('/foo')))
    }),
  ]),
])
