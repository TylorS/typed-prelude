import { describe, given, it } from '@typed/test'
import { Bounds, Direction, Tiles } from '../../model/Grid'
import { convertSizeToBounds } from '../convertSizeToBounds'
import { moveTilesInDirection } from './moveTilesInDirection'

export const test = describe(`moveTilesInDirection`, [
  given(`3x3 Bounds, Direction, and Tiles`, [
    it(`returns Tiles moved up`, ({ equal }) => {
      const bounds: Bounds = convertSizeToBounds([3, 3])
      const tiles: Tiles = [
        { value: 2, position: [0, 0] },
        { value: 2, position: [0, 1] },
        { value: 4, position: [2, 2] },
      ]
      const expectedUp: Tiles = [
        { value: 4, position: [0, 0] },
        { value: 4, position: [2, 0] },
      ]
      const expectedDown: Tiles = [
        { value: 4, position: [2, 2] },
        { value: 4, position: [0, 2] },
      ]
      const expectedLeft: Tiles = [
        { value: 2, position: [0, 0] },
        { value: 2, position: [0, 1] },
        { value: 4, position: [0, 2] },
      ]

      const expectedRight: Tiles = [
        { value: 4, position: [2, 2] },
        { value: 2, position: [2, 1] },
        { value: 2, position: [2, 0] },
      ]

      equal(expectedUp, moveTilesInDirection(bounds, Direction.Up, tiles))
      equal(expectedDown, moveTilesInDirection(bounds, Direction.Down, tiles))
      equal(expectedLeft, moveTilesInDirection(bounds, Direction.Left, tiles))
      equal(expectedRight, moveTilesInDirection(bounds, Direction.Right, tiles))
    }),
  ]),
])
