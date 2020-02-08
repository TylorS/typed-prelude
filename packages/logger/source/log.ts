import { get } from '@typed/effects'
import { LoggerEnv } from './types'

export function* log(msg: string) {
  const { logger } = yield* get<LoggerEnv>()

  yield logger.log(msg)
}
