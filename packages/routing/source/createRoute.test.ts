import { Path } from '@typed/history'
import { isJust, isNothing, unwrap, withDefault } from '@typed/maybe'
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
        const route = createRoute('/user/:id*')
        const pathname = '/user/42/profile' as Path

        ok(isJust(route.match(pathname)))
      }),

      it(`matches a path with hyphens`, ({ ok }) => {
        const route = createRoute('/:storeNickname/shop-by-brand')
        const pathname = '/tricities/shop-by-brand' as Path

        ok(isJust(route.match(pathname)))
      }),
    ]),
  ]),

  given(`a pathname with parameters`, [
    it(`returns Just<Params> when matched`, ({ equal }) => {
      const path = '/user/:userId'
      const route = createRoute<{ userId: string }>(path)
      const url = '/user/42' as Path

      equal('42', withDefault({ userId: '31' }, route.match(url)).userId)
    }),

    it(`returns Nothing when not matched`, ({ ok }) => {
      const path = '/user/:userId'
      const route = createRoute<{ userId: string }>(path)
      const url = '/hello/42' as Path

      ok(isNothing(route.match(url)))
    }),
  ]),

  describe(`Route.createPath`, [
    it(`creates a path with hyphens`, ({ ok, equal }) => {
      const route = createRoute<{ storeNickname: string }>('/:storeNickname/shop-by-brand')
      const storeNickname = 'tricities'
      const expected = `/${storeNickname}/shop-by-brand` as Path
      const params = { storeNickname }
      const actual = route.createPath(params)

      ok(isJust(actual))
      unwrap(equal(expected), actual)
    }),
  ]),
])
