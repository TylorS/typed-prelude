import { get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* error(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.error(msg)
}
