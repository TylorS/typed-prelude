import { Disposable } from '@most/types'
import { Subscriber } from 'cote'
import { Logger } from '../../types'
import { eventNames } from './eventNames'

export type CreateLoggingServerOptions = {
  logger: Logger
  namespace: string
}

export function createLoggingServer({ logger, namespace }: CreateLoggingServerOptions): Disposable {
  const subscriber = new Subscriber(
    { namespace, subscribesTo: eventNames, name: 'Logging Server' },
    { log: false },
  )

  subscriber.on('log', event => {
    logger.log((event as any).val)
  })

  subscriber.on('error', event => {
    logger.error((event as any).val)
  })

  subscriber.on('clear', () => logger.clear())

  subscriber.on('info', event => {
    logger.info((event as any).val)
  })

  subscriber.on('debug', event => {
    logger.debug((event as any).val)
  })

  subscriber.on('time', event => {
    const { label, elapsed } = event as any

    logger.time(label)(elapsed)
  })

  const dispose = () => {
    subscriber.removeAllListeners()
    subscriber.close()
  }

  return { dispose }
}
