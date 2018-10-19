import { pathJoin } from '../common/pathJoin'
import { curry } from '../lambda'
import { chain, withDefault } from '../maybe'
import { Route } from './types'

export const stripRouteFromPath: {
  (path: string, route: Route<any>): string
  (path: string): (route: Route<any>) => string
} = curry(function stripRoute(path: string, { match, createPath }: Route<any>): string {
  return pathJoin([path.replace(withDefault('', chain(createPath, match(path))), '')])
})
