import { Path, pathJoin } from '@typed/history'
import { describe, given, it } from '@typed/test'
import { basePathFromRoute } from './basePathFromRoute'
import { createRoute } from './createRoute'

export const test = describe(`basePathFromRoute`, [
  given(`a Route and a Path`, [
    it(`returns the base of the path`, ({ equal }) => {
      const path = pathJoin(['/user/42/profile/settings'])
      const route = createRoute('/user/:id')
      const expected = `/user/42` as Path

      equal(expected, basePathFromRoute(path, route))
    }),
  ]),
])
