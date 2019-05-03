import { Path } from '@typed/history'
import { curry } from '@typed/lambda'
import { Match } from '@typed/logic'
import { combine, Maybe } from '@typed/maybe'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch: {
  <A, B>(route: Route<A>, match: Match<Path, B>): Match<Path, [A, B]>
  <A>(route: Route<A>): <B>(match: Match<Path, B>) => Match<Path, [A, B]>
} = curry(__nestMatch) as {
  <A, B>(route: Route<A>, match: Match<Path, B>): Match<Path, [A, B]>
  <A>(route: Route<A>): <B>(match: Match<Path, B>) => Match<Path, [A, B]>
}

export function __nestMatch<A, B>(route: Route<A>, match: Match<Path, B>): Match<Path, [A, B]> {
  return (href: Path): Maybe<[A, B]> => {
    const maybeA = route.match(href)
    const maybeB = match(stripRouteFromPath(route, href))

    return combine((a, b) => [a, b] as [A, B], maybeA, maybeB)
  }
}
