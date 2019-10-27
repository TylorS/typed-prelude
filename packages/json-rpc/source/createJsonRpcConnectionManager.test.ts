import { Disposable } from '@typed/disposable'
import { range } from '@typed/list'
import { describe, given, it } from '@typed/test'
import { EOL } from 'os'
import { stdio } from 'stdio-mock'
import { createJsonRpcConnectionManager } from './createJsonRpcConnectionManager'
import { createStreamTransport } from './createStreamTransport'
import { createNotification } from './creators'
import { Connection } from './types'

export const test = describe(`createJsonRpcConnectionManager`, [
  given(`onConnection Handler and Transports`, [
    it(`facilitates JSON-RPC communications`, ({ equal }, done) => {
      const { stdin, stdout } = stdio()
      const notification = createNotification('test')
      const onConnection = ({ context }: Connection): Disposable => {
        return context.incoming.subscribe(msg => {
          equal(notification, msg)
          done()
        })
      }

      createJsonRpcConnectionManager(onConnection, {
        transports: [createStreamTransport(stdin, stdout)],
      })

      stdin.write(JSON.stringify(notification) + EOL)
    }),
  ]),

  given(`onConnection Handler and Transports and multicast=true`, [
    it(`only calls onConnection once`, ({ equal }, done) => {
      let expected = 3
      let called = 0

      const notification = createNotification('test')
      const transports = range(0, expected).map(() => {
        const { stdin, stdout } = stdio()
        const transport = createStreamTransport(stdin, stdout)

        return {
          transport,
          stdin,
        }
      })
      const onConnection = ({ context }: Connection): Disposable => {
        called++

        return context.incoming.subscribe(msg => {
          equal(notification, msg)

          if (--expected === 0) {
            equal(1, called)
            done()
          }
        })
      }

      const { stats } = createJsonRpcConnectionManager(onConnection, {
        transports: transports.map(x => x.transport),
        multicast: true,
      })

      equal(3, stats.activeConnections)

      transports.forEach(({ stdin }) => stdin.write(JSON.stringify(notification) + EOL))
    }),
  ]),
])
