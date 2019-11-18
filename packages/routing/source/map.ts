import { Arity1, curry } from '@typed/lambda'
import { map as mapMaybe } from '@typed/maybe'
import { Route } from './types'

export const map = curry(__map) as {
  <A extends Record<string, string>, B, C>(fn: Arity1<B, C>, route: Route<A, B>): Route<A, C>
  <B, C>(fn: Arity1<B, C>): <A extends Record<string, string>>(route: Route<A, B>) => Route<A, C>
}

function __map<A extends Record<string, string>, B, C>(
  fn: Arity1<B, C>,
  route: Route<A, B>,
): Route<A, C> {
  return {
    ...route,
    match: path => mapMaybe(fn, route.match(path)),
  }
}
