import { co, Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export const info: (msg: string) => Effects<LoggerEnv, void> = co(function* info(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield* logger.info(msg)
})
