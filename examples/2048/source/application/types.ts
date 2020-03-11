import { Effects } from '@typed/effects'
import { Tuple } from '@typed/tuple'
import { Direction, Grid, RandomIntEnv } from '../domain'

export type GameState = {
  readonly grid: Grid
  readonly coordinates: ReadonlyArray<Tuple<number>>
  readonly score: number
  readonly hasRemainingMoves: boolean
}

export type Action = Tuple<'move', Direction> | Tuple<'resize'> | readonly ['new-grid']
export type Dispatch = (action: Action) => Effects<RandomIntEnv, void>
