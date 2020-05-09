import { Effects } from '@typed/effects'
import { Tuple } from '@typed/tuple'
import { Direction, Grid } from '../domain'

export type GameState = {
  readonly grid: Grid
  readonly coordinates: ReadonlyArray<Tuple<number>>
  readonly score: number
  readonly hasRemainingMoves: boolean
  readonly hasWon: boolean
}

export type Action = Tuple<'move', Direction> | readonly ['resize'] | readonly ['new-grid']
export type Dispatch<E> = (action: Action) => Effects<E, void>
