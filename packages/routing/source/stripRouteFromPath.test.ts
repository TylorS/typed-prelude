import { Path } from '@typed/history'
import { describe, given, it, Test } from '@typed/test'
import { createRoute } from './createRoute'
import { stripRouteFromPath } from './stripRouteFromPath'

export const test: Test = describe(`stripRouteFromPath`, [
  given(`a path and a route`, [
    it(`returns a pathname with route match removed`, ({ equal }) => {
      const path = `/user/42/profile/settings` as Path

      equal('/profile/settings' as Path, stripRouteFromPath(createRoute('/user/:userId'), path))
      equal('/settings' as Path, stripRouteFromPath(createRoute('/user/:userId/profile/'), path))
      equal(path, stripRouteFromPath(createRoute('/foo'), path))
    }),
  ]),
])
