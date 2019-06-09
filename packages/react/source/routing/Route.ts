import { unwrap } from '@typed/maybe'
import { Path, Route as RouteType } from '@typed/routing'
import { useMatch } from '../hooks'
import { withMemo } from '../withMemo'
import { useHistory } from './HistoryContext'

export const Route = withMemo(RouteComponent) as <A>(
  props: RouteProps<A>,
) => React.ReactElement | null

function RouteComponent<A>({ route, children }: RouteProps<A>): React.ReactElement | null {
  const { location } = useHistory()

  const match = useMatch(route.match, location.pathname as Path)

  return unwrap(children, match)
}

export type RouteProps<A> = {
  route: RouteType<A>
  children: (match: A) => React.ReactElement | null
}
