import { pathJoin as joinPath } from '@typed/common'
import { ArgsOf } from '@typed/lambda'
import { isNewType, NewType } from '@typed/new-type'

// Ignore to allow Phantom type for History State type
// @ts-ignore
export type HistoryEnv<A = null> = {
  readonly location: Location
  readonly history: History
}

export type Path = NewType<string, 'Path'>
export const isPath = isNewType<Path>((str: string) => str.startsWith('/'))

export const pathJoin = joinPath as (...args: ArgsOf<typeof joinPath>) => Path
