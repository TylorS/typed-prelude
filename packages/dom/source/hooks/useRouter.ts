import { Env, execPure, handle, Pure } from '@typed/env'
import { HistoryEnv, Path, scopeHistoryEnv } from '@typed/history'
import { pipe } from '@typed/lambda'
import { Match, oneOf } from '@typed/logic'
import { chain, map, Maybe, withDefault } from '@typed/maybe'
import { Route } from '@typed/routing'
import { first, second } from '@typed/tuple'
import { useMemo } from '../tagged'
import { useDisposable } from './useDisposable'
import { useMaybe } from './useMaybe'

export type Router<A extends any[], B = unknown> = {
  readonly [K in keyof A]: readonly [Route<A[K]>, Match<A[K], B>]
}

export function useRouter<A, B = null>(
  router: Router<any[], A>,
  historyEnv: HistoryEnv<B>,
  scope?: Path,
): UseRouter<A, B> {
  const scopedHistoryEnv = useMemo(
    () => (scope ? scopeHistoryEnv(scope, historyEnv) : historyEnv),
    [historyEnv, scope],
  )
  const path = scopedHistoryEnv.location.pathname as Path
  const matcher = useMemo(
    () =>
      oneOf(
        router.map(([route, f]) =>
          pipe(
            route.match,
            chain(f),
            map((x: A): [A, Route] => [x, route]),
          ),
        ),
      ),
    [router],
  )
  const [matchedValue, setMatchedValue, clear] = useMaybe<[A, Route]>(matcher(path))
  const match = map(first, matchedValue)
  const route = map(second, matchedValue)

  useDisposable(() => execPure(withDefault(clear, map(setMatchedValue, matcher(path)))), [
    path,
    ...router,
  ])

  return {
    match,
    route,
    state: history.state,
    updateLocation: handle(scopedHistoryEnv),
    ...scopedHistoryEnv,
  }
}

export type UseRouter<A, B> = {
  readonly match: Maybe<A>
  readonly route: Maybe<Route>
  readonly state: B
  readonly location: Location
  readonly history: History
  readonly updateLocation: <C>(env: Env<HistoryEnv<B>, C>) => Pure<C>
}
