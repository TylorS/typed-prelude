import { co, Effects, get } from '@typed/effects'
import { HistoryEnv, Path } from './types'

/**
 * Push state to history environment
 * @param data: A
 * @param path: Path
 * @returns Effects<HistoryEnv<A>, A>
 */
export const pushState: <A>(data: A, path: Path) => Effects<HistoryEnv<A>, A> = co(
  function* pushState<A>(data: A, path: Path) {
    const { history } = yield* get<HistoryEnv<A>>()

    history.pushState(data, '', path)

    return data
  },
)

export function pushPath(path: Path): Effects<HistoryEnv, null> {
  return pushState(null, path)
}
