import { Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* info(msg: string): Effects<LoggerEnv, void> {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.info(msg)
}
