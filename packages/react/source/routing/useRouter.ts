import { Env, execPure, Pure } from '@typed/env'
import { HistoryEnv, Path } from '@typed/history'
import { oneOf } from '@typed/logic'
import { map, Maybe, withDefault } from '@typed/maybe'
import { Route } from '@typed/routing'
import { useCallback } from 'react'
import { useDisposable } from '../hooks/useDisposable'
import { useMaybe } from '../hooks/useMaybe'
import { useHistory } from './HistoryContext'

export type Router<A extends any[], B = unknown> = {
  [K in keyof A]: [Route<A[K]>, (value: A[K]) => B]
}

export function useRouter<A, B = null>(...router: Router<any[], A>): UseRouter<A, B> {
  const { location, history, updateLocation } = useHistory<B>()
  const path = location.pathname as Path
  const getMatcher = useCallback(
    () => oneOf(router.map(([route, f]) => (path: Path) => map(f, route.match(path)))),
    [router],
  )
  const matcher = getMatcher()
  const [matchedValue, setMatchedValue, clear] = useMaybe<A>(matcher(path))

  useDisposable(() => execPure(withDefault(clear, map(setMatchedValue, matcher(path)))), [
    path,
    ...router,
  ])

  return {
    match: matchedValue,
    state: history.state,
    updateLocation,
  }
}

export type UseRouter<A, B> = {
  readonly match: Maybe<A>
  readonly state: B
  readonly updateLocation: <C>(env: Env<HistoryEnv<B>, C>) => Pure<C>
}
