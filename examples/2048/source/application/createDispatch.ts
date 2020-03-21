import { equals } from '@typed/common'
import { delay, PureEffect } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import { sortTilesForDirection } from 'source/domain/services/moveTilesInDirection/sortTiles'
import { addNewTile, Bounds, createNewGrid, Grid, moveTilesInDirection, Size } from '../domain'
import { Action } from './types'

export function createDispatch(
  bounds: Bounds,
  getGrid: () => PureEffect<Grid>,
  setGrid: (updateFn: Arity1<Grid, Grid>) => PureEffect<Grid>,
) {
  return function* dispatch(action: Action) {
    switch (action[0]) {
      case 'new-grid': {
        const grid = yield* getGrid()
        const newGrid = yield* createNewGrid(grid.size)

        yield* setGrid(() => newGrid)

        break
      }
      case 'move': {
        const direction = action[1]
        const grid = yield* getGrid()
        const updatedGrid = { ...grid, tiles: moveTilesInDirection(bounds, direction, grid.tiles) }

        console.log(
          sortTilesForDirection(direction, grid.tiles),
          sortTilesForDirection(direction, updatedGrid.tiles),
        )

        if (
          equals(
            sortTilesForDirection(direction, grid.tiles),
            sortTilesForDirection(direction, updatedGrid.tiles),
          )
        ) {
          break
        }

        yield* setGrid(() => updatedGrid)
        yield* delay(100)

        const newGrid = yield* addNewTile(updatedGrid)

        yield* setGrid(() => newGrid)

        break
      }
      case 'resize': {
        const grid = yield* getGrid()
        const newGrid = yield* createNewGrid(getNextSize(grid.size))

        yield* setGrid(() => newGrid)

        break
      }
    }
  }
}

function getNextSize(size: Size): Size {
  if (size[0] === 6) {
    return [3, 3]
  }

  return [size[0] + 1, size[1] + 1] as Size
}
