import { equals } from '@typed/common'
import { any } from '@typed/logic'
import { Direction, Grid } from '../model'
import { convertSizeToBounds } from './convertSizeToBounds'
import { moveTilesInDirection } from './moveTilesInDirection'
import { sortTilesForDirection } from './moveTilesInDirection/sortTiles'

export function checkHasRemainingMoves({ size, tiles }: Grid): boolean {
  const bounds = convertSizeToBounds(size)

  // Check one-by-one if anything can be moved
  return any(
    direction =>
      !equals(
        sortTilesForDirection(direction, tiles),
        sortTilesForDirection(direction, moveTilesInDirection(bounds, direction, tiles)),
      ),
    [Direction.Up, Direction.Down, Direction.Left, Direction.Right],
  )
}
