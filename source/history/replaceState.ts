import { Disposable } from '@typed/disposable'
import { Env } from '@typed/env'
import { curry } from '@typed/lambda'
import { Tuple } from '@typed/tuple'
import { HistoryEnv, Path } from './types'

export const replaceState: {
  <A>(data: A, path: Path): Env<HistoryEnv<A>, Tuple<A, Location>>
  <A>(data: A): (path: Path) => Env<HistoryEnv<A>, Tuple<A, Location>>
} = curry(
  <A>(data: A, path: Path): Env<HistoryEnv<A>, Tuple<A, Location>> => ({
    runEnv: (f, { history, location }) => {
      history.replaceState(data, '', path)

      f([data, location])

      return Disposable.None
    },
  }),
)

export const replacePath = replaceState(null)
