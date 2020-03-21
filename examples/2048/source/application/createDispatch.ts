import { PureEffect } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import { addNewTile, Bounds, createNewGrid, Grid, moveTilesInDirection, Size } from '../domain'
import { Action } from './types'

export function createDispatch(
  bounds: Bounds,
  size: Size,
  setGrid: (updateFn: Arity1<Grid, Grid>) => PureEffect<Grid>,
) {
  return function* dispatch(action: Action) {
    switch (action[0]) {
      case 'new-grid': {
        const newGrid = yield* createNewGrid(size)

        yield* setGrid(() => newGrid)

        break
      }
      case 'move': {
        const updatedGrid = yield* setGrid(grid => ({
          ...grid,
          tiles: moveTilesInDirection(bounds, action[1], grid.tiles),
        }))

        const newGrid = yield* addNewTile(updatedGrid)

        yield* setGrid(() => newGrid)

        break
      }
      case 'resize': {
        const newGrid = yield* createNewGrid(getNextSize(size))

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
