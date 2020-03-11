import { equals } from '@typed/common/esm'
import { any } from '@typed/logic'
import { Direction, Grid } from '../model'
import { convertSizeToBounds } from './convertSizeToBounds'
import { moveTilesInDirection } from './moveTilesInDirection'

export function checkHasRemainingMoves({ size, tiles }: Grid): boolean {
  // If there's any open positions return early
  if (tiles.length < size[0] * size[1]) {
    return true
  }

  const bounds = convertSizeToBounds(size)

  // Check one-by-one if anything can be moved
  return any(direction => !equals(tiles, moveTilesInDirection(bounds, direction, tiles)), [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
  ])
}
