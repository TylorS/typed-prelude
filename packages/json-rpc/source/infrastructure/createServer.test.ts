import { describe, given, it } from '@typed/test'
import { createTestServerChannel, createTestConnection } from './createTestServerChannel'
import { createServer } from './createServer'
import { createNotification, MessageDirection } from '../domain'
import { sendMessage } from './connections'
import { runWith, runEffects } from '@typed/effects'
import { NodeGenerator } from '@typed/uuid'
import { createTestHookEnvironment } from '@typed/hooks'

export const test = describe(`createServer`, [
  given(`a ServerChannel`, [
    it(`returns a Server that handles notification registration`, ({ equal }, done) => {
      const testEnv = createTestHookEnvironment(new NodeGenerator())
      const method = 'test'
      const notification = createNotification(method)
      const connection = createTestConnection()
      const serverChannel = createTestServerChannel({ connections: [connection] })

      let called = 0

      function* testNotificationHandler(n: typeof notification) {
        try {
          equal(notification, n)
          called++
        } catch (error) {
          done(error)
        }
      }

      function* sut() {
        try {
          const server = yield* createServer(serverChannel)
          const disposable = yield* server.registerNotification(method, testNotificationHandler)

          // Give time for server to subscribe to connections
          testEnv.timer.progressTimeBy(1)

          equal(0, called)

          yield* sendMessage(notification, MessageDirection.Incoming)
          yield* sendMessage(notification, MessageDirection.Incoming)

          equal(2, called)

          disposable.dispose()

          yield* sendMessage(notification, MessageDirection.Incoming)

          equal(2, called)

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), { ...testEnv, connection })
    }),
  ]),
])
