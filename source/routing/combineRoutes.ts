import { pathJoin } from '@typed/common'
import { createRoute } from './createRoute'
import { Route, Routes } from './types'

export const combineRoutes = <A extends Record<string, string | number>>(
  ...routes: Routes<A>
): Route<A> => createRoute(pathJoin(routes.map(x => x.path)))
