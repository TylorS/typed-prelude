import { curry } from '@typed/lambda'
import { pathJoin } from '../common/pathJoin'
import { basePathFromRoute } from './basePathFromRoute'
import { Route } from './types'

export const stripRouteFromPath: {
  (route: Route<any>, path: string): string
  (route: Route<any>): (path: string) => string
} = curry(function stripRoute(route: Route<any>, path: string): string {
  return pathJoin([path.replace(basePathFromRoute(path, route), '')])
})
