import { describe, given, it } from '@typed/test'
import { Bounds, Direction, Position } from '../../model/Grid'
import { convertSizeToBounds } from '../convertSizeToBounds'
import { movePositionInDirection } from './movePositionInDirection'

const bounds: Bounds = convertSizeToBounds([3, 3])
const move = (direction: Direction, position: Position) =>
  movePositionInDirection(bounds, direction, position)

export const test = describe(`movePositionInDirection`, [
  given(`Bounds, Direction, and Position not at edge`, [
    it(`returns a proposed Position`, ({ equal }) => {
      const sut = (direction: Direction) => move(direction, [1, 1])

      const expectedUp: Position = [1, 0]
      const expectedDown: Position = [1, 2]
      const expectedLeft: Position = [0, 1]
      const expectedRight: Position = [2, 1]

      equal(expectedUp, sut(Direction.Up))
      equal(expectedDown, sut(Direction.Down))
      equal(expectedLeft, sut(Direction.Left))
      equal(expectedRight, sut(Direction.Right))
    }),
  ]),

  given(`Bounds, Direction, and Position at edge`, [
    it(`returns a the same Position`, ({ equal }) => {
      const sut = (direction: Direction, position: Position) =>
        equal(position, move(direction, position))

      sut(Direction.Up, [0, 0])
      sut(Direction.Up, [1, 0])
      sut(Direction.Up, [2, 0])

      sut(Direction.Down, [0, 2])
      sut(Direction.Down, [1, 2])
      sut(Direction.Down, [2, 2])

      sut(Direction.Left, [0, 0])
      sut(Direction.Left, [0, 1])
      sut(Direction.Left, [0, 2])

      sut(Direction.Right, [2, 0])
      sut(Direction.Right, [2, 1])
      sut(Direction.Right, [2, 2])
    }),
  ]),
])
