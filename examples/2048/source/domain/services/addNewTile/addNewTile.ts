import { Effects } from '@typed/effects'
import { equals } from '@typed/logic'
import { uuid, UuidEnv } from '@typed/uuid'
import { Grid, RandomIntEnv } from '../../model'
import { convertSizeToBounds } from '../convertSizeToBounds'
import { getAllCoordinates } from '../getAllCoordinates'
import { choosePosition } from './choosePosition'
import { generateNewStartingValue } from './generateNewStartingValue'

export function* addNewTile(grid: Grid): Effects<RandomIntEnv & UuidEnv, Grid> {
  const bounds = convertSizeToBounds(grid.size)
  const coordinates = getAllCoordinates(bounds)
  const positions = grid.tiles.map((tile) => tile.position)
  const openPositions = coordinates.filter((position) => !positions.find(equals(position)))

  if (openPositions.length === 0) {
    return grid
  }

  const newTile = {
    position: yield* choosePosition(openPositions),
    value: yield* generateNewStartingValue(),
    id: yield* uuid(),
  }

  return {
    ...grid,
    tiles: [...grid.tiles, newTile],
  }
}
