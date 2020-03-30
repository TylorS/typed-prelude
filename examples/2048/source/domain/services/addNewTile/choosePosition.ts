import { Effects } from '@typed/effects'
import { Position, RandomIntEnv } from 'source/domain/model'
import { generateRandomInt } from './generateRandomInt'

export function* choosePosition(
  openPositions: ReadonlyArray<Position>,
): Effects<RandomIntEnv, Position> {
  return openPositions[yield* generateRandomInt(0, openPositions.length)]
}
