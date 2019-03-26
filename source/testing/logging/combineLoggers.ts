import { Logger } from '@typed/common/logger'
import { noOp } from '@typed/lambda'

export function combineLoggers(...loggers: Logger[]): Logger {
  const logger: Logger = {
    log: msg => Promise.all(loggers.map(l => l.log(msg))).then(noOp),
    error: msg => Promise.all(loggers.map(l => l.error(msg))).then(noOp),
    info: msg => Promise.all(loggers.map(l => l.info(msg))).then(noOp),
    clear: () => Promise.all(loggers.map(l => l.clear())).then(noOp),
    debug: msg => Promise.all(loggers.map(l => l.debug(msg))).then(noOp),
    time: label => {
      const timeEnds = loggers.map(l => l.time(label))

      return elapsed => Promise.all(timeEnds.map(timeEnd => timeEnd(elapsed))).then(noOp)
    },
  }

  return logger
}
