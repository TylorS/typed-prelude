import { pathJoin } from '../common/pathJoin'
import { And } from '../lambda'
import { createRoute } from './createRoute'
import { Route, RouteParams, Routes } from './types'

export const combineRoutes = <A extends Routes>(...routes: A): CombinedRoute<A> =>
  createRoute(pathJoin(routes.map(x => x.path)))

export type CombinedRoute<A extends Array<Route<any>>> = Route<CombinedParams<A>>
export type CombinedParams<A extends Routes> = And<{ [K in keyof A]: RouteParams<A[K]> }>
