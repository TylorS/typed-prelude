import { Effect, Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* time(label: string): Effects<LoggerEnv, Effects<unknown, number>> {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.timeStart(label)

  return Effect.fromEnv(logger.timeEnd(label))
}
