import { Href } from '../history'
import { Match } from '../logic'

export interface Route<A = unknown> {
  readonly path: string
  readonly match: Match<Href, A>
  readonly createPath: (params: A, trailingSlash?: boolean) => Href
}
