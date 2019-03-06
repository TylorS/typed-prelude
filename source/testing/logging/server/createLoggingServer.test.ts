import { disposeAll } from '@most/disposable'
import { newDefaultScheduler } from '@most/scheduler'
import { delay } from '@typed/promises'
import { describe, given, it, Test, TYPED_TEST } from '@typed/test'
import { getMachineId } from '../../getMachineId'
import { LogLevel } from '../../types'
import { createTestLogger, Logs } from '../createTestLogger'
import { createLoggingServer } from './createLoggingServer'
import { createServerLogger } from './createServerLogger'

const timeout = (ms: number, test: Test): Test => {
  const config = test[TYPED_TEST]

  return { ...test, [TYPED_TEST]: { ...config, timeout: ms } }
}

export const test = timeout(
  20000,
  describe(`createLoggingServer`, [
    given(`a Logger and a namespace`, [
      it(`responds to the various events`, async ({ equal }) => {
        const namespace = getMachineId()
        const scheduler = newDefaultScheduler()
        const { logger: testLogger, getLogs } = createTestLogger({
          logLevel: LogLevel.DEBUG,
          scheduler,
        })
        const loggingServer = createLoggingServer({ logger: testLogger, namespace })
        const serverLogger = await createServerLogger({
          namespace,
          scheduler: newDefaultScheduler(),
        })
        const disposable = disposeAll([serverLogger, loggingServer])

        await serverLogger.log('Hi')
        await serverLogger.error('Uh-oh')
        await serverLogger.clear()
        await serverLogger.info('Hi')
        await serverLogger.debug('Debugging')
        await serverLogger.time('Test')()

        await delay(3000)

        const logs = getLogs()

        disposable.dispose()

        equal(
          [
            { type: 'log', message: 'Hi' },
            { type: 'error', message: 'Uh-oh' },
            { type: 'info', message: 'Hi' },
            { type: 'debug', message: 'Debugging' },
          ] as Logs,
          logs.slice(0, logs.length - 1),
        )

        equal('time', logs[logs.length - 1].type)
        equal('Test', (logs[logs.length - 1] as any).label)
      }),
    ]),
  ]),
)
