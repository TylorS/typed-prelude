import { pathJoin } from '../common/pathJoin'
import { curry } from '../lambda'
import { map, withDefault } from '../maybe'
import { Route } from './types'

export const stripRoute: {
  (path: string, route: Route<any>): string
  (path: string): (route: Route<any>) => string
} = curry(function stripRoute(path: string, { match, createPath }: Route<any>): string {
  return pathJoin([path.replace(withDefault('', map(createPath, match(path))), '')])
})
