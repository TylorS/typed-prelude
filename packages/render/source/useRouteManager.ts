import { Effects, get } from '@typed/effects'
import { HistoryEnv, scopeHistoryEnv } from '@typed/history'
import { HookEffects, HookEnv, runWithHooks, useMatches, useMemo } from '@typed/hooks'
import { Match } from '@typed/logic'
import { fromJust, isNothing, Just, Maybe } from '@typed/maybe'
import { Path, Route } from '@typed/routing'
import { HookManagerEnv } from './HookManagerEnv'

export function* useRouteManager<A, B>(
  routes: ReadonlyArray<Route<any, () => HookEffects<A, B>>>,
  scope?: Path,
): Effects<A & HookEnv & HistoryEnv<any> & HookManagerEnv, Maybe<B>> {
  const { getEnvironmentByKey, ...historyEnv } = yield* get<
    A & HookEnv & HistoryEnv<any> & HookManagerEnv
  >()
  const { location } = yield* useMemo(
    (scope, historyEnv) => (scope ? scopeHistoryEnv(scope, historyEnv) : historyEnv),
    [scope, historyEnv] as const,
  )
  const matches = yield* useMemo(
    routes => routes.map(r => Match.map(b => [r, b] as const, r.match)),
    [routes],
  )
  const match = yield* useMatches(location.pathname as Path, matches)

  if (isNothing(match)) {
    return match
  }

  const [route, computation] = fromJust(match)

  return Just.of(yield* runWithHooks(computation(), getEnvironmentByKey(route)))
}
