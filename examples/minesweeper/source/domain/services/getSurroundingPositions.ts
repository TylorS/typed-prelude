import { Position, Size } from '../model'
import { getSizeIndexes } from './getSizeIndexes'

export function getSurroundingPositions(position: Position, puzzleSize: Size): readonly Position[] {
  return getPossiblePositions(position).filter(isValidPosition(puzzleSize))
}

function getPossiblePositions([x, y]: Position): readonly Position[] {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ]
}

function isValidPosition(puzzleSize: Size) {
  const [maxXPosition, maxYPosition] = getSizeIndexes(puzzleSize)

  return (position: Position) => {
    const [x, y] = position
    const validXPos = x >= 0 && x <= maxXPosition
    const validYPos = y >= 0 && y <= maxYPosition

    return validXPos && validYPos
  }
}
