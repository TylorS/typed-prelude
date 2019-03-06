import { Disposable, Scheduler } from '@most/types'
import { delay } from '@typed/promises'
import { Publisher } from 'cote'
import { Logger } from '../../types'
import { eventNames } from './eventNames'

export type CreateServerLoggerOptions = {
  namespace: string
  scheduler: Scheduler
}

export type ServerLogger = Disposable & Logger

export async function createServerLogger({
  namespace,
  scheduler,
}: CreateServerLoggerOptions): Promise<ServerLogger> {
  const publisher = new Publisher(
    { namespace, name: 'Server Logger', broadcasts: eventNames },
    { log: false },
  )

  const logger: Logger = {
    log: async (msg: string) => {
      publisher.publish('log', { type: 'log', val: msg })
    },
    error: async (msg: string) => {
      publisher.publish('error', { type: 'error', val: msg })
    },
    clear: async () => {
      publisher.publish('clear', { type: 'clear' })
    },
    info: async (msg: string) => {
      publisher.publish('info', { type: 'info', val: msg })
    },
    debug: async (msg: string) => {
      publisher.publish('debug', { type: 'debug', val: msg })
    },
    time: (label: string) => {
      const start = scheduler.currentTime()

      return async (elapsed: number = scheduler.currentTime() - start) => {
        publisher.publish('time', { type: 'time', label, elapsed })
      }
    },
  }

  const dispose = () => {
    publisher.removeAllListeners()
    publisher.close()
  }

  const serverLogger = { ...logger, dispose }

  // Official examples use 3000ms
  await delay(3000)

  return serverLogger
}
