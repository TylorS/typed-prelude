import { co, Effects, get, PureEffect } from '@typed/effects'
import { LoggerEnv } from './types'

export const time: (label: string) => Effects<LoggerEnv, PureEffect<number>> = co(function*(
  label: string,
) {
  const { logger } = yield* get<LoggerEnv>()

  yield* logger.timeStart(label)

  return logger.timeEnd(label)
})
