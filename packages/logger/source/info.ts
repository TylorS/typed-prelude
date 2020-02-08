import { get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* info(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.info(msg)
}
