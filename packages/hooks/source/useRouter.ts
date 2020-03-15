import { co, Effects, get } from '@typed/effects'
import { HistoryEnv, Path, scopeHistoryEnv } from '@typed/history'
import { Maybe } from '@typed/maybe'
import { Route } from '@typed/routing'
import { HookEnv } from './HookEnvironment'
import { useMatches } from './useMatches'
import { useMemo } from './useMemo'

export const useRouter: <A, B = null>(
  routes: ReadonlyArray<Route<any, A>>,
  scope?: Path,
) => Effects<HookEnv & HistoryEnv<B>, Maybe<A>> = co(function* useRouter<A, B = null>(
  routes: ReadonlyArray<Route<any, A>>,
  scope?: Path,
) {
  const historyEnv = yield* get<HistoryEnv<B>>()
  const { location } = yield* useMemo(
    (scope, historyEnv) => (scope ? scopeHistoryEnv(scope, historyEnv) : historyEnv),
    [scope, historyEnv] as const,
  )
  const matches = yield* useMemo(routes => routes.map(r => r.match), [routes])

  return yield* useMatches(location.pathname as Path, matches)
})
