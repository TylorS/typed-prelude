import { Env } from '@typed/env'
import { curry } from '@typed/lambda'
import { Tuple } from '@typed/tuple'
import { HistoryEnv, Path } from './types'

/**
 * Push state to history environment
 * @param data: A
 * @param path: Path
 * @returns Env<HistoryEnv<A>, Tuple<A, Location>>
 */
export const pushState: {
  <A>(data: A, path: Path): Env<HistoryEnv<A>, Tuple<A, Location>>
  <A>(data: A): (path: Path) => Env<HistoryEnv<A>, Tuple<A, Location>>
} = curry(
  <A>(data: A, path: Path): Env<HistoryEnv<A>, Tuple<A, Location>> => ({
    type: 'lazy',
    runEnv: (f, { history, location }) => {
      history.pushState(data, '', path)

      return f([data, location])
    },
  }),
)

export const pushPath: (path: Path) => Env<HistoryEnv<null>, Tuple<null, Location>> = pushState(
  null,
)
