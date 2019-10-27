import { disposeAll } from '@typed/disposable'
import { createUuid } from '@typed/uuid'
import { createMessageContext } from './createMessageContext'
import { Connection, JsonRpcTransport } from './types'

export function createStreamTransport(
  incoming: NodeJS.ReadableStream,
  outgoing: NodeJS.WritableStream,
): JsonRpcTransport {
  return {
    init: ({ connections }) => {
      const context = createMessageContext()
      const connection: Connection = {
        id: createUuid(),
        context,
      }
      const onData = (message: string) => context.incoming.publish(JSON.parse(message))
      const onClose = () => connections.publish({ type: 'remove', connection })

      connections.publish({ type: 'add', connection })

      incoming.addListener('data', onData)
      incoming.addListener('close', onClose)

      return disposeAll([
        context.outgoing.subscribe(message => outgoing.write(JSON.stringify(message) + `\n`)),
        {
          dispose: () => {
            incoming.removeListener('data', onData)
            incoming.removeListener('close', onClose)
          },
        },
      ])
    },
  }
}
