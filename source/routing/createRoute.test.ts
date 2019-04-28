import { Path } from '@typed/history'
import { isJust, isNothing, withDefault } from '@typed/maybe'
import { describe, given, it, Test } from '@typed/test'
import { createRoute } from './createRoute'

export const test: Test = describe(`createRoute`, [
  given(`a pathname`, [
    describe(`Route.match`, [
      it(`returns a Just when given identical pathname`, ({ ok }) => {
        const pathname = '/hello/world' as Path
        const route = createRoute(pathname)

        ok(isJust(route.match(pathname)))
      }),

      it(`returns a Nothing when given a different pathname`, ({ ok }) => {
        const pathname = '/hello/world' as Path
        const route = createRoute(pathname)

        ok(isNothing(route.match('/other/path' as Path)))
      }),

      it(`returns a Just when given longer pathname`, ({ ok }) => {
        const route = createRoute('/user/:id')
        const pathname = '/user/42/profile' as Path

        ok(isJust(route.match(pathname)))
      }),
    ]),
  ]),

  given(`a pathname with parameters`, [
    it(`returns Just<Params> when matched`, ({ equal }) => {
      const path = '/user/:userId'
      const route = createRoute<{ userId: number }>(path)
      const url = '/user/42' as Path

      equal({ userId: 42 }, withDefault(null, route.match(url)))
    }),

    it(`returns Nothing when not matched`, ({ ok }) => {
      const path = '/user/:userId'
      const route = createRoute<{ userId: number }>(path)
      const url = '/hello/42' as Path

      ok(isNothing(route.match(url)))
    }),
  ]),
])
