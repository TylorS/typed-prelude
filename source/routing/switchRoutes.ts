import { Href } from '../history'
import { Or } from '../lambda'
import { Match, oneOf } from '../logic'
import { RoutesOf } from './types'

export const switchRoutes = <A extends any[]>(...routes: RoutesOf<A>): Match<Href, Or<A>> =>
  oneOf<Href, Or<A>>(routes.map(x => x.match))
