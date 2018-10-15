import { describe, given, it, Test } from '@typed/test'
import { combineRoutes } from './combineRoutes'
import { createRoute } from './createRoute'

export const test: Test = describe(`combine`, [
  given(`2 routes`, [
    it(`returns a combined route`, ({ equal }) => {
      const routeA = createRoute('/a')
      const routeB = createRoute('/b')
      const routeC = combineRoutes([routeA, routeB])

      equal('/a/b/', routeC.createPath({}, true))
    }),
  ]),
])
