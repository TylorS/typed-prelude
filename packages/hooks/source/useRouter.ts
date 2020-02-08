import { get } from '@typed/effects'
import { HistoryEnv, Path, scopeHistoryEnv } from '@typed/history'
import { Maybe } from '@typed/maybe'
import { Route } from '@typed/routing'
import { HookEffects } from './HookEffects'
import { useMatches } from './useMatches'
import { useMemo } from './useMemo'

export function* useRouter<A, B = null>(
  routes: ReadonlyArray<Route<any, A>>,
  scope?: Path,
): HookEffects<HistoryEnv<B>, Maybe<A>> {
  const historyEnv = yield* get<HistoryEnv<B>>()
  const { location } = yield* useMemo(
    (scope, historyEnv) => (scope ? scopeHistoryEnv(scope, historyEnv) : historyEnv),
    [scope, historyEnv] as const,
  )
  const matches = yield* useMemo(routes => routes.map(r => r.match), [routes])

  return yield* useMatches(location.pathname as Path, matches)
}
