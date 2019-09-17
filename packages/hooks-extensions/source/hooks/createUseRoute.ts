import { CreateHookContext, withCreateHook } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { Path, Route } from '@typed/routing'
import { createUseHistoryEnv } from '../channels'
import { createUseMatch } from './createUseMatch'

export const createUseRoute = <A, B>(
  context: CreateHookContext,
  route: Route<A>,
  withRoute: Arity1<A, B>,
) => {
  const createUseRouteHook = withCreateHook(
    createHook => [createHook(createUseHistoryEnv), createHook(createUseMatch)] as const,
    ([useHistory, useMatch], route: Route<A>, withRoute: Arity1<A, B>) => {
      const { location } = useHistory()
      const matched = useMatch(location.pathname as Path, route.match, withRoute)

      return matched
    },
  )

  return createUseRouteHook(context, route, withRoute)
}
