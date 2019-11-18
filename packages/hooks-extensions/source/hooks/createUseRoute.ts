import { CreateHookContext, withCreateHook } from '@typed/hooks'
import { Arity1, id } from '@typed/lambda'
import { Path, Route } from '@typed/routing'
import { createUseHistoryEnv } from '../channels'
import { createUseMatch } from './createUseMatch'

export const createUseRoute = <A, B, C = B>(
  context: CreateHookContext,
  route: Route<A, B>,
  withRoute: Arity1<B, C> = id as Arity1<B, C>,
) => {
  const createUseRouteHook = withCreateHook(
    createHook => [createHook(createUseHistoryEnv), createHook(createUseMatch)] as const,
    ([useHistory, useMatch], route: Route<A, B>, withRoute: Arity1<B, C> = id as Arity1<B, C>) => {
      const { location } = useHistory()
      const matched = useMatch(location.pathname as Path, route.match, withRoute)

      return matched
    },
  )

  return createUseRouteHook(context, route, withRoute)
}
