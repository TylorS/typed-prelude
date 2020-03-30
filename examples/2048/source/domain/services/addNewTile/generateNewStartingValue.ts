import { Effects } from '@typed/effects'
import { RandomIntEnv } from '../../model'
import { generateRandomInt } from './generateRandomInt'

export function* generateNewStartingValue(): Effects<RandomIntEnv, number> {
  const randomInt = yield* generateRandomInt(0, 1)

  return randomInt > 0.5 ? 4 : 2
}
