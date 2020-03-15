import { co, Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export const error: (msg: string) => Effects<LoggerEnv, void> = co(function* error(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield* logger.error(msg)
})
