import { Path } from '../history'
import { Match, oneOf } from '../logic'
import { RoutesOf } from './types'

export const switchRoutes = <A>(...routes: RoutesOf<A[]>): Match<Path, A> =>
  oneOf<Path, A>(routes.map(x => x.match))
