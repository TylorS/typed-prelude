import { Path } from '@typed/history'
import { map, withDefault } from '@typed/maybe'
import { Route } from './types'

export function basePathFromRoute<A>(path: Path, { match, createPath }: Route<A>): Path {
  return withDefault('/' as Path, map(createPath, match(path)))
}
