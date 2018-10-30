import { Path } from '../history'
import { Or } from '../lambda'
import { Match, oneOf } from '../logic'
import { RoutesOf } from './types'

export const switchRoutes = <A extends any[]>(...routes: RoutesOf<A>): Match<Path, Or<A>> =>
  oneOf<Path, Or<A>>(routes.map(x => x.match))
