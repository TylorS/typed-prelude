// Ignore to allow Phantom type for History State type
// @ts-ignore
export type HistoryEnv<A = null> = {
  readonly location: Location
  readonly history: History
}

export { Path } from '../common/pathJoin'
