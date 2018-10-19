import { Href } from '../history'
import { Match } from '../logic'
import { Maybe } from '../maybe'

export interface Route<A = unknown> {
  readonly path: string
  readonly match: Match<Href, A>
  readonly createPath: (params: A, trailingSlash?: boolean) => Maybe<Href>
}

export type Routes = Array<Route<any>>

export type RouteParams<A> = A extends Route<infer R> ? R : never
export type RoutesOf<A extends any[]> = { [K in keyof A]: Route<A[K]> }
