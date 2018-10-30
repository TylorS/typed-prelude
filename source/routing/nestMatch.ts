import { Path } from '../history'
import { curry } from '../lambda'
import { Match } from '../logic'
import { combine, Maybe } from '../maybe'
import { Overwrite } from '../objects'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch = curry(__nestMatch) as {
  <A, B>(match: Match<Path, A>, route: Route<B>): Match<Path, Overwrite<B, A>>
  <A>(match: Match<Path, A>): <B>(route: Route<B>) => Match<Path, Overwrite<B, A>>
}

export function __nestMatch<A, B>(
  match: Match<Path, A>,
  route: Route<B>,
): Match<Path, Overwrite<B, A>> {
  return (href: Path): Maybe<Overwrite<B, A>> => {
    const maybeA = match(stripRouteFromPath(href, route))
    const maybeB = route.match(href)

    return combine((a, b) => (Object.assign({}, b, a) as any) as Overwrite<B, A>, maybeA, maybeB)
  }
}
