import { get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* debug(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.debug(msg)
}
