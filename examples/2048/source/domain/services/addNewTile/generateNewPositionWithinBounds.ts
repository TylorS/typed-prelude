import { Effect } from '@typed/effects'
import { Bounds, Position, RandomIntEnv } from '../../model'
import { generateRandomInt } from './generateRandomInt'

export function* generateNewPositionWithinBounds(bounds: Bounds): Effect<RandomIntEnv, Position> {
  const { columns, rows } = bounds
  const x = yield* generateRandomInt(...columns)
  const y = yield* generateRandomInt(...rows)

  return [x, y] as const
}
