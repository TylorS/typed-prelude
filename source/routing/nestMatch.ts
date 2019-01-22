import { Path } from '../history'
import { curry } from '../lambda'
import { Match } from '../logic'
import { combine, Maybe } from '../maybe'
import { Overwrite } from '../objects'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch: {
  <A, B>(route: Route<A>, match: Match<Path, B>): Match<Path, Overwrite<A, B>>
  <A>(route: Route<A>): <B>(match: Match<Path, B>) => Match<Path, Overwrite<A, B>>
} = curry(__nestMatch)

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
