import { Effect } from '@typed/effects'
import { equals } from '@typed/logic'
import { UuidEnv } from '@typed/uuid'
import { Grid, RandomIntEnv, Tile } from '../../model'
import { convertSizeToBounds } from '../convertSizeToBounds'
import { createNewTileWithinBounds } from './createNewTileWithinBounds'

export function* addNewTile(grid: Grid): Effect<RandomIntEnv & UuidEnv, Grid> {
  const bounds = convertSizeToBounds(grid.size)
  const positions = grid.tiles.map(tile => tile.position)
  const hasPosition = (tile: Tile) => positions.findIndex(equals(tile.position)) > -1

  let newTile = yield* createNewTileWithinBounds(bounds)

  while (hasPosition(newTile)) {
    newTile = yield* createNewTileWithinBounds(bounds)
  }

  return {
    ...grid,
    tiles: [...grid.tiles, newTile],
  }
}
