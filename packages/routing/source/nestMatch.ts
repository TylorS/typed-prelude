import { Path } from '@typed/history'
import { curry } from '@typed/lambda'
import { Match } from '@typed/logic'
import { combine } from '@typed/maybe'
import { stripRouteFromPath } from './stripRouteFromPath'
import { Route } from './types'

export const nestMatch: {
  <A, B, C>(route: Route<A, B>, match: Match<Path, C>): Match<Path, readonly [B, C]>
  <A, B>(route: Route<A, B>): <C>(match: Match<Path, C>) => Match<Path, readonly [B, C]>
} = curry(__nestMatch) as {
  <A, B, C>(route: Route<A, B>, match: Match<Path, C>): Match<Path, readonly [B, C]>
  <A, B>(route: Route<A, B>): <C>(match: Match<Path, C>) => Match<Path, readonly [B, C]>
}

export function __nestMatch<A, B, C>(
  route: Route<A, B>,
  match: Match<Path, C>,
): Match<Path, readonly [B, C]> {
  return href => {
    const maybeA = route.match(href)
    const maybeB = match(stripRouteFromPath(route, href))

    return combine((a, b) => [a, b] as const, maybeA, maybeB)
  }
}
