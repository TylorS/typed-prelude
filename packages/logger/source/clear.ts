import { co, Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export const clear: () => Effects<LoggerEnv, void> = co(function* clear() {
  const { logger } = yield* get<LoggerEnv>()

  yield* logger.clear()
})
