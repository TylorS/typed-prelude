import { co, Effects, get } from '@typed/effects'
import { HistoryEnv, Path } from './types'

export const replaceState: <A>(data: A, path: Path) => Effects<HistoryEnv<A>, A> = co(
  function* replaceState<A>(data: A, path: Path) {
    const { history } = yield* get<HistoryEnv<A>>()

    history.replaceState(data, '', path)

    return data
  },
)

export const replacePath = (path: Path): Effects<HistoryEnv, null> => replaceState<null>(null, path)
