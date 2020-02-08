import { Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* clear(): Effects<LoggerEnv, void> {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.clear()
}
