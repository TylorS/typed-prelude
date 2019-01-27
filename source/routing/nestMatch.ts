import { Path } from '@typed/history'
import { curry } from '@typed/lambda'
import { Match } from '@typed/logic'
import { combine, Maybe } from '@typed/maybe'
import { Overwrite } from '@typed/objects'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch = curry(__nestMatch) as {
  <A, B>(route: Route<A>, match: Match<Path, B>): Match<Path, Overwrite<A, B>>
  <A>(route: Route<A>): <B>(match: Match<Path, B>) => Match<Path, Overwrite<A, B>>
}

export function __nestMatch<A, B>(
  route: Route<B>,
  match: Match<Path, A>,
): Match<Path, Overwrite<B, A>> {
  return (href: Path): Maybe<Overwrite<B, A>> => {
    const maybeA = match(stripRouteFromPath(route, href))
    const maybeB = route.match(href)

    return combine((a, b) => (Object.assign({}, b, a) as any) as Overwrite<B, A>, maybeA, maybeB)
  }
}
