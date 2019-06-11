import { Env, execPure, handle, Pure } from '@typed/env'
import { HistoryEnv, Path, scopeHistoryEnv } from '@typed/history'
import { pipe } from '@typed/lambda'
import { Match, oneOf } from '@typed/logic'
import { chain, map, Maybe, withDefault } from '@typed/maybe'
import { Route } from '@typed/routing'
import { first, second } from '@typed/tuple'
import { useCallback } from 'react'
import { useDisposable } from '../hooks/useDisposable'
import { useMaybe } from '../hooks/useMaybe'
import { useHistory } from './HistoryContext'

export type Router<A extends any[], B = unknown> = {
  readonly [K in keyof A]: readonly [Route<A[K]>, Match<A[K], B>]
}

export function useRouter<A, B = null>(router: Router<any[], A>, scope?: Path): UseRouter<A, B> {
  const { updateLocation, ...historyEnv } = useHistory<B>()
  const wrapHistoryEnv = useCallback(
    () => (scope ? scopeHistoryEnv(scope, historyEnv) : historyEnv),
    [historyEnv, scope],
  )
  const wrappedEnv = wrapHistoryEnv()
  const path = location.pathname as Path
  const getMatcher = useCallback(
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
  const matcher = getMatcher()
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
    updateLocation: handle(wrappedEnv),
    ...wrappedEnv,
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
