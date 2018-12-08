import { pathJoin } from '../common/pathJoin'
import { curry } from '../lambda'
import { basePathFromRoute } from './basePathFromRoute'
import { Route } from './types'

export const stripRouteFromPath = curry(function stripRoute(
  path: string,
  route: Route<any>,
): string {
  return pathJoin([path.replace(basePathFromRoute(path, route), '')])
}) as {
  (path: string, route: Route<any>): string
  (path: string): (route: Route<any>) => string
}
