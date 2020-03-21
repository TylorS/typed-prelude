import { findIndex, reduce, remove, update } from '@typed/list'
import { equals } from '@typed/logic'
import { fromJust, isNothing } from '@typed/maybe'
import { Bounds, Direction, Position, Tile, Tiles } from '../../model'
import { checkCanMergeTile } from './checkCanMergeTiles'
import { movePositionInDirection } from './movePositionInDirection'
import { sortTilesForDirection } from './sortTiles'

const isAtPosition = (position: Position) => (tile: Tile) => equals(position, tile.position)

export function moveTilesInDirection(bounds: Bounds, direction: Direction, tiles: Tiles): Tiles {
  let current = moveTiles(bounds, direction, tiles)
  let next = moveTiles(bounds, direction, current)

  while (!equals(current, next)) {
    current = next
    next = moveTiles(bounds, direction, current)
  }

  return next
}

export function moveTiles(bounds: Bounds, direction: Direction, tiles: Tiles): Tiles {
  const sortedTiles = sortTilesForDirection(direction, tiles)

  return reduce(moveTile(bounds, direction), sortedTiles, sortedTiles)
}

export function moveTile(bounds: Bounds, direction: Direction) {
  let merged = 0

  const move = (tiles: Tiles, tile: Tile, originalTilesIndex: number): Tiles => {
    const tileIndex = originalTilesIndex - merged
    const proposedPosition: Position = movePositionInDirection(bounds, direction, tile.position)
    const tileAtPositionIndexMaybe = findIndex(isAtPosition(proposedPosition), tiles)
    const proposedTile: Tile = { ...tile, position: proposedPosition }

    // Can't be moved - is at edge of grid already
    if (equals(tile.position, proposedPosition)) {
      return tiles
    }

    // Recursively move this tile in the same direction until at edge or bumps into another tile
    if (isNothing(tileAtPositionIndexMaybe)) {
      return move(update(tileIndex, proposedTile, tiles), proposedTile, originalTilesIndex)
    }

    const tileAtPositionIndex = fromJust(tileAtPositionIndexMaybe)
    const tileAtPosition = tiles[tileAtPositionIndex]

    // If there's a tile at this position and they can't be merged
    if (!checkCanMergeTile(tileAtPosition, tile)) {
      return tiles
    }

    merged++

    const mergedTile: Tile = {
      id: proposedTile.id,
      value: tileAtPosition.value + tile.value,
      position: proposedPosition,
    }

    return update(tileAtPositionIndex, mergedTile, remove(tileIndex, 1, tiles))
  }

  return move
}
