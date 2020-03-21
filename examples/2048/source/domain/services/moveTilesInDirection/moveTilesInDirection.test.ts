import { describe, given, it } from '@typed/test'
import { NodeGenerator, uuid4 } from '@typed/uuid'
import { Bounds, Direction, Tiles } from '../../model/Grid'
import { convertSizeToBounds } from '../convertSizeToBounds'
import { moveTilesInDirection } from './moveTilesInDirection'

const { randomUuidSeed } = new NodeGenerator()
const createId = () => ({ id: uuid4(randomUuidSeed()) })

export const test = describe(`moveTilesInDirection`, [
  given(`3x3 Bounds, Direction, and Tiles`, [
    it(`returns Tiles moved in the given direction`, ({ equal }) => {
      const bounds: Bounds = convertSizeToBounds([3, 3])
      const aId = createId()
      const bId = createId()
      const cId = createId()

      const tiles: Tiles = [
        { ...aId, value: 2, position: [0, 0] },
        { ...bId, value: 2, position: [0, 1] },
        { ...cId, value: 4, position: [2, 2] },
      ]
      const expectedUp: Tiles = [
        { ...bId, value: 4, position: [0, 0] },
        { ...cId, value: 4, position: [2, 0] },
      ]
      const expectedDown: Tiles = [
        { ...cId, value: 4, position: [2, 2] },
        { ...aId, value: 4, position: [0, 2] },
      ]
      const expectedLeft: Tiles = [
        { ...aId, value: 2, position: [0, 0] },
        { ...bId, value: 2, position: [0, 1] },
        { ...cId, value: 4, position: [0, 2] },
      ]

      const expectedRight: Tiles = [
        { ...cId, value: 4, position: [2, 2] },
        { ...bId, value: 2, position: [2, 1] },
        { ...aId, value: 2, position: [2, 0] },
      ]

      equal(expectedUp, moveTilesInDirection(bounds, Direction.Up, tiles))
      equal(expectedDown, moveTilesInDirection(bounds, Direction.Down, tiles))
      equal(expectedLeft, moveTilesInDirection(bounds, Direction.Left, tiles))
      equal(expectedRight, moveTilesInDirection(bounds, Direction.Right, tiles))
    }),
  ]),

  given(`3x3 Bounds, Direction.Left, and a known edge case of Tiles`, [
    it(`returns the Tiles moved into proper position`, ({ equal }) => {
      const bounds: Bounds = convertSizeToBounds([3, 3])
      const aId = createId()
      const bId = createId()
      const cId = createId()
      const dId = createId()
      const eId = createId()
      const fId = createId()
      const gId = createId()
      const tiles: Tiles = [
        { ...aId, value: 16, position: [0, 0] },
        { ...bId, value: 8, position: [0, 1] },
        { ...cId, value: 4, position: [0, 2] },
        { ...dId, value: 4, position: [1, 0] },
        { ...eId, value: 8, position: [2, 0] },
        { ...fId, value: 4, position: [2, 1] },
        { ...gId, value: 2, position: [2, 2] },
      ]
      const expected: Tiles = [
        { ...aId, value: 16, position: [0, 0] },
        { ...bId, value: 8, position: [0, 1] },
        { ...cId, value: 4, position: [0, 2] },
        { ...dId, value: 4, position: [1, 0] },
        { ...eId, value: 8, position: [2, 0] },
        { ...fId, value: 4, position: [1, 1] },
        { ...gId, value: 2, position: [1, 2] },
      ]

      equal(expected, moveTilesInDirection(bounds, Direction.Left, tiles))
    }),
  ]),
])
