import { Path } from '@typed/history'
import { Match } from '@typed/logic'
import { Maybe } from '@typed/maybe'

export interface Route<A = unknown, B = A> {
  readonly path: Path
  readonly match: Match<Path, B>
  readonly createPath: (params: A, trailingSlash?: boolean) => Maybe<Path>
}

export type RouteParams<A> = A extends Route<infer R> ? R : never
export type RouteValue<A> = A extends Route<any, infer R> ? R : never

export { Path }
