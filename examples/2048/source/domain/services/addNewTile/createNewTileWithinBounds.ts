import { Effect } from '@typed/effects'
import { uuid, UuidEnv } from '@typed/uuid'
import { Bounds, RandomIntEnv, Tile } from '../../model'
import { generateNewPositionWithinBounds } from './generateNewPositionWithinBounds'
import { generateNewStartingValue } from './generateNewStartingValue'

export function* createNewTileWithinBounds(bounds: Bounds): Effect<RandomIntEnv & UuidEnv, Tile> {
  const position = yield* generateNewPositionWithinBounds(bounds)
  const value = yield* generateNewStartingValue()
  const id = yield* uuid()

  return { id, position, value }
}
