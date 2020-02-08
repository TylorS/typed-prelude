import { Effect, get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* time(label: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.timeStart(label)

  return Effect.fromEnv(logger.timeEnd(label))
}
