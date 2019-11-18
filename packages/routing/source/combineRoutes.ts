import { pathJoin } from '@typed/history'
import { curry } from '@typed/lambda'
import { createRoute } from './createRoute'
import { Route } from './types'

export const combineRoutes = curry(__combineRoutes) as {
  <A extends Record<string, string>, B extends Record<string, string>>(
    routeA: Route<A>,
    routeB: Route<B>,
  ): Route<A & B>
  <A extends Record<string, string>>(routeA: Route<A>): <B extends Record<string, string>>(
    routeB: Route<B>,
  ) => Route<A & B>
}

function __combineRoutes<A extends Record<string, string>, B extends Record<string, string>>(
  routeA: Route<A>,
  routeB: Route<B>,
): Route<A & B> {
  return createRoute(pathJoin([routeA.path, routeB.path]))
}
