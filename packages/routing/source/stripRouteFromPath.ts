import { Path, pathJoin } from '@typed/history'
import { curry } from '@typed/lambda'
import { basePathFromRoute } from './basePathFromRoute'
import { Route } from './types'

export const stripRouteFromPath: {
  (route: Route<any>, path: Path): Path
  (route: Route<any>): (path: Path) => Path
} = curry(function stripRoute(route: Route<any>, path: Path): Path {
  return pathJoin([path.replace(basePathFromRoute(path, route), '')])
})
