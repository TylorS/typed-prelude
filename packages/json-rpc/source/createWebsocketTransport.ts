import { isBrowser } from '@typed/common'
import { Disposable } from '@typed/disposable'
import { Subscription } from '@typed/subscription'
import { createUuid } from '@typed/uuid'
import { disposeAll } from '../../disposable/umd'
import { createMessageContext } from './createMessageContext'
import { Connection, ConnectionEvent, JsonRpcTransport } from './types'

export type CreateClientWebsocketTransportOptions = {
  readonly connectionUrl: string
  readonly protocols?: string | string[]
}

// Works in Node and Browsers only maintains a single connection
export async function createClientWebsocketTransport({
  connectionUrl,
  protocols,
}: CreateClientWebsocketTransportOptions): Promise<JsonRpcTransport> {
  const WS: new (connectionUrl: string, protocols?: string | string[]) => WebSocket = isBrowser
    ? WebSocket
    : require('ws')

  return {
    init: ({ connections }) => wrapWebsocketConnect(new WS(connectionUrl, protocols), connections),
  }
}

export type CreateWebsocketServerTransportOptions = {
  readonly serverOptions: import('ws').ServerOptions
}

// Only supports Node
export function createWebsocketServerTransport({
  serverOptions,
}: CreateWebsocketServerTransportOptions): JsonRpcTransport {
  const ws = require('ws')

  return {
    init: ({ connections }) => {
      const server: import('ws').Server = new ws.Server(serverOptions)
      const disposables: Disposable[] = []

      server.on('connection', socket =>
        disposables.push(wrapWebsocketConnect(socket as any, connections)),
      )

      return Disposable.lazy(() => disposeAll(disposables))
    },
  }
}

function wrapWebsocketConnect(ws: WebSocket, connections: Subscription<ConnectionEvent>) {
  const context = createMessageContext()
  const connection: Connection = {
    id: createUuid(),
    context,
  }
  let disposable: Disposable = Disposable.None
  const cleanup = () => {
    context.incoming.clearSubscribers()
    context.outgoing.clearSubscribers()
    connections.publish({ type: 'remove', connection })
    disposable.dispose()
  }
  const dispose = () => {
    ws.close(-1, 'Disposed')
    cleanup()
  }

  ws.onopen = () => {
    connections.publish({ type: 'add', connection })
    disposable = context.outgoing.subscribe(message => ws.send(JSON.stringify(message)))
  }
  ws.onmessage = event => context.incoming.publish(JSON.parse(event.data))
  ws.onclose = cleanup

  return {
    dispose,
  }
}
