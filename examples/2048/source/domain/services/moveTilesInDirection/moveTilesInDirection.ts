import { findIndex, reduce, remove, update } from '@typed/list'
import { equals } from '@typed/logic'
import { fromJust, isNothing } from '@typed/maybe'
import { Bounds, Direction, Position, Tile, Tiles } from '../../model'
import { checkCanMergeTile } from './checkCanMergeTiles'
import { isVertical } from './directions'
import { movePositionInDirection } from './movePositionInDirection'
import { positionIsAtHorizontalEdge, positionIsAtVerticalEdge } from './positionIsAtEdge'
import { sortTilesForDirection } from './sortTiles'

const isAtPosition = (position: Position) => (tile: Tile) => equals(position, tile.position)

export function moveTilesInDirection(bounds: Bounds, direction: Direction, tiles: Tiles): Tiles {
  const isVerticalDirection = isVertical(direction)
  const sortedTiles = sortTilesForDirection(direction, tiles)
  const isAtEdge = (position: Position): boolean =>
    isVerticalDirection
      ? positionIsAtVerticalEdge(bounds, position)
      : positionIsAtHorizontalEdge(bounds, position)

  return reduce(moveTile(bounds, direction, isAtEdge), sortedTiles, sortedTiles)
}

export function moveTile(
  bounds: Bounds,
  direction: Direction,
  isAtEdge: (position: Position) => boolean,
) {
  let merged = 0

  const move = (tiles: Tiles, tile: Tile, index: number): Tiles => {
    const tileIndex = index - merged
    const proposedPosition: Position = movePositionInDirection(bounds, direction, tile.position)

    // Can't be moved - is at edge of grid
    if (equals(tile.position, proposedPosition)) {
      return tiles
    }

    const proposedTile: Tile = { ...tile, position: proposedPosition }
    const tileAtPositionIndexMaybe = findIndex(isAtPosition(proposedPosition), tiles)

    // It has no other tile to contend with at this proposed position
    if (isNothing(tileAtPositionIndexMaybe)) {
      return isAtEdge(proposedPosition)
        ? update(tileIndex, proposedTile, tiles) // update if at edge
        : move(tiles, proposedTile, index) // Recursively move this tile in the same direction until at edge or bumps into another tile
    }

    const tileAtPositionIndex = fromJust(tileAtPositionIndexMaybe)
    const tileAtPosition = tiles[tileAtPositionIndex]

    // If there's a tile at this position and they can't be merged
    if (!checkCanMergeTile(tileAtPosition, tile)) {
      return tiles
    }

    merged++

    const mergedTile: Tile = {
      value: tileAtPosition.value + tile.value,
      position: proposedPosition,
    }

    return update(tileAtPositionIndex, mergedTile, remove(tileIndex, 1, tiles))
  }

  return move
}
