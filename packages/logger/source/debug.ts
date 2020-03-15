import { co, Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export const debug: (msg: string) => Effects<LoggerEnv, void> = co(function* debug(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield* logger.debug(msg)
})
