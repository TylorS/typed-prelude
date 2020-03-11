import { ascend, descend, sort } from '@typed/list'
import { Direction, Position, Tiles } from '../../model'
import { isPositive, isVertical } from './directions'

const MULTIPLIER = 10000 // Used to weight rows or columns

const convertPositionByRowToValue = ([column, row]: Position) => row * MULTIPLIER + column
const convertPositionByColumnToValue = ([column, row]: Position) => column * MULTIPLIER + row

export const sortTilesForDirection = (direction: Direction, tiles: Tiles) => {
  const sortFn = isPositive(direction) ? descend : ascend
  const conversionFn = isVertical(direction)
    ? convertPositionByRowToValue
    : convertPositionByColumnToValue

  return sort(
    sortFn(tile => conversionFn(tile.position)),
    tiles,
  )
}
