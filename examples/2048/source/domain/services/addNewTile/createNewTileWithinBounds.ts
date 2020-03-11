import { Effect } from '@typed/effects'
import { Bounds, RandomIntEnv, Tile } from '../../model'
import { generateNewPositionWithinBounds } from './generateNewPositionWithinBounds'
import { generateNewStartingValue } from './generateNewStartingValue'

export function* createNewTileWithinBounds(bounds: Bounds): Effect<RandomIntEnv, Tile> {
  const position = yield* generateNewPositionWithinBounds(bounds)
  const value = yield* generateNewStartingValue()

  return { position, value }
}
