import { get } from '@typed/effects'
import { HistoryEnv, Path, scopeHistoryEnv } from '@typed/history'
import { Route } from '@typed/routing'
import { useMatches } from './useMatches'
import { useMemo } from './useMemo'

export function* useRouter<A, B = null>(routes: ReadonlyArray<Route<any, A>>, scope?: Path) {
  const historyEnv = yield* get<HistoryEnv<B>>()
  const { location } = yield* useMemo(
    (scope, historyEnv) => (scope ? scopeHistoryEnv(scope, historyEnv) : historyEnv),
    [scope, historyEnv] as const,
  )
  const matches = yield* useMemo(routes => routes.map(r => r.match), [routes])

  return yield* useMatches(location.pathname as Path, matches)
}
