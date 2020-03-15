import { co, Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export const log: (msg: string) => Effects<LoggerEnv, void> = co(function* log(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield* logger.log(msg)
})
