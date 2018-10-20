import { Href } from '../history'
import { curry } from '../lambda'
import { Match } from '../logic'
import { combine, Maybe } from '../maybe'
import { Overwrite } from '../objects'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch = curry(__nestMatch) as {
  <A, B>(match: Match<Href, A>, route: Route<B>): Match<Href, Overwrite<B, A>>
  <A>(match: Match<Href, A>): <B>(route: Route<B>) => Match<Href, Overwrite<B, A>>
}

export function __nestMatch<A, B>(
  match: Match<Href, A>,
  route: Route<B>,
): Match<Href, Overwrite<B, A>> {
  return (href: Href): Maybe<Overwrite<B, A>> => {
    const maybeA = match(stripRouteFromPath(href, route))
    const maybeB = route.match(href)

    return combine((a, b) => (Object.assign({}, b, a) as any) as Overwrite<B, A>, maybeA, maybeB)
  }
}
