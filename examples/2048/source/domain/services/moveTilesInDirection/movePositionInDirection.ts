import { decrement, increment } from '@typed/math'
import { map, mapLeft } from '@typed/tuple'
import { Bounds, Direction, Position } from '../../model'
import { isPositive, isVertical } from './directions'
import { positionIsWithinBounds } from './positionIsWithinBounds'

export function movePositionInDirection(
  bounds: Bounds,
  direction: Direction,
  position: Position,
): Position {
  const moveInDirection = isVertical(direction) ? map : mapLeft
  const moveBy = isPositive(direction) ? increment : decrement
  const proposedPosition = moveInDirection(moveBy, position)
  const isWithinBounds = positionIsWithinBounds(bounds, proposedPosition)

  return isWithinBounds ? proposedPosition : position
}
