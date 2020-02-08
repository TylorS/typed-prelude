import { get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* clear() {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.clear()
}
