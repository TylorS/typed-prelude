import { pathJoin } from '../common/pathJoin'
import { createRoute } from './createRoute'
import { Route } from './types'

export const combineRoutes = <A>(routes: Array<Route<A>>): Route<A> =>
  createRoute(pathJoin(routes.map(x => x.path)))
