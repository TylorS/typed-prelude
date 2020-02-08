import { Effects, get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* error(msg: string): Effects<LoggerEnv, void> {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.error(msg)
}
