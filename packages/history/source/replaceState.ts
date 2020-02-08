import { get } from '@typed/effects'
import { HistoryEnv, Path } from './types'

export function* replaceState<A>(data: A, path: Path) {
  const { history } = yield* get<HistoryEnv<A>>()

  history.replaceState(data, '', path)

  return data
}

export const replacePath = (path: Path) => replaceState<null>(null, path)
