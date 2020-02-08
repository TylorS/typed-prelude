import { Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* log(msg: string): Effects<LoggerEnv, void> {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.log(msg)
}
