import { Tuple } from '@typed/tuple'
import { calculateScore, checkHasRemainingMoves, Grid } from '../domain'
import { getWinningAmount } from './getWinningAmount'
import { GameState } from './types'

export function deriveState(grid: Grid, coordinates: ReadonlyArray<Tuple<number>>): GameState {
  const winningAmount = getWinningAmount(grid)

  return {
    grid,
    coordinates,
    score: calculateScore(grid),
    hasRemainingMoves: checkHasRemainingMoves(grid),
    hasWon: grid.tiles.some(tile => tile.value >= winningAmount),
  }
}
