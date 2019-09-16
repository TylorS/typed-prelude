import { CreateHookContext, createUseMemo, withCreateHook } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { map } from '@typed/maybe'
import { Path, Route } from '@typed/routing'
import { createUseHistoryEnv } from '../channels'

export const createUseRoute = <A, B>(
  context: CreateHookContext,
  route: Route<A>,
  withRoute: Arity1<A, B>,
) => {
  const createUseRouteHook = withCreateHook(
    createHook => [createHook(createUseHistoryEnv), createHook(createUseMemo)] as const,
    ([useHistory, useMemo], route: Route<A>, withRoute: Arity1<A, B>) => {
      const { location } = useHistory()
      const matched = useMemo(matchRoute, [location.pathname as Path, route, withRoute])

      return matched
    },
  )

  return createUseRouteHook(context, route, withRoute)
}

function matchRoute<A, B>(path: Path, route: Route<A>, withRoute: Arity1<A, B>) {
  return map(withRoute, route.match(path))
}
