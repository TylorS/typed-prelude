import { Tuple } from '@typed/tuple'
import { calculateScore, checkHasRemainingMoves, Grid } from '../domain'
import { GameState } from './types'

export function deriveState(grid: Grid, coordinates: ReadonlyArray<Tuple<number>>): GameState {
  return {
    grid,
    coordinates,
    score: calculateScore(grid),
    hasRemainingMoves: checkHasRemainingMoves(grid),
  }
}
