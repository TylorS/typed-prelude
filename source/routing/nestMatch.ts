import { Href } from '../history'
import { curry } from '../lambda'
import { Match } from '../logic'
import { combine, Maybe } from '../maybe'
import { MergeObjects } from '../objects'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch = curry(__nestMatch) as {
  <A, B>(match: Match<Href, A>, route: Route<B>): Match<Href, MergeObjects<B, A>>
  <A>(match: Match<Href, A>): <B>(route: Route<B>) => Match<Href, MergeObjects<B, A>>
}

export function __nestMatch<A, B>(
  match: Match<Href, A>,
  route: Route<B>,
): Match<Href, MergeObjects<B, A>> {
  return (href: Href): Maybe<MergeObjects<B, A>> => {
    const maybeB = route.match(href)
    const pathname = stripRouteFromPath(href, route)
    const maybeA = match(pathname)

    return combine((a, b) => (Object.assign({}, b, a) as any) as MergeObjects<B, A>, maybeA, maybeB)
  }
}
