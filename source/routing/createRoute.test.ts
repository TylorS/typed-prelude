import { isJust, isNothing, withDefault } from '../maybe'
import { describe, given, it, Test } from '../test'
import { createRoute } from './createRoute'

export const test: Test = describe(`createRoute`, [
  given(`a pathname`, [
    describe(`Route.match`, [
      it(`returns a Just when given identical pathname`, ({ ok }) => {
        const pathname = '/hello/world'
        const route = createRoute(pathname)

        ok(isJust(route.match(pathname)))
      }),

      it(`returns a Nothing when given a different pathname`, ({ ok }) => {
        const pathname = '/hello/world'
        const route = createRoute(pathname)

        ok(isNothing(route.match('/other/path')))
      }),

      it(`returns a Just when given longer pathname`, ({ ok }) => {
        const route = createRoute('/user/:id')
        const pathname = '/user/42/profile'

        ok(isJust(route.match(pathname)))
      }),
    ]),
  ]),

  given(`a pathname with parameters`, [
    it(`returns Just<Params> when matched`, ({ equal }) => {
      const path = '/user/:userId'
      const route = createRoute<{ userId: number }>(path)
      const url = '/user/42'

      equal({ userId: 42 }, withDefault(null, route.match(url)))
    }),

    it(`returns Nothing when not matched`, ({ ok }) => {
      const path = '/user/:userId'
      const route = createRoute<{ userId: number }>(path)
      const url = '/hello/42'

      ok(isNothing(route.match(url)))
    }),
  ]),
])
