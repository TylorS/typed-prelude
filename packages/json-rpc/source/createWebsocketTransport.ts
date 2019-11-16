import { Disposable, disposeAll } from '@typed/disposable'
import { noOp } from '@typed/lambda'
import { Subscription } from '@typed/subscription'
import { createUuid, Uuid } from '@typed/uuid'
import { IWaterfallOptions, Tank, Waterfall } from 'hydrated-ws'
import { createMessageContext } from './createMessageContext'
import { Connection, ConnectionEvent, JsonRpcTransport } from './types'

export type CreateClientWebsocketTransportOptions = IWaterfallOptions & {
  readonly connectionUrl: string
  readonly protocols?: string | string[]
  readonly onConnection?: (
    connectionId: Uuid,
    websocket: WebSocket,
  ) => readonly [WebSocket, Disposable]
}

export function createClientWebsocketTransport({
  connectionUrl,
  protocols,
  onConnection,
  ...waterfallOptions
}: CreateClientWebsocketTransportOptions): JsonRpcTransport {
  return {
    init: ({ connections }) => {
      const ws: WebSocket = new Tank(new Waterfall(connectionUrl, protocols, waterfallOptions))
      const connectionId = createUuid()

      if (onConnection) {
        const [wrapped, disposable] = onConnection(connectionId, ws)

        return disposeAll([disposable, wrapWebsocketConnect(wrapped, connections, connectionId)])
      }

      return wrapWebsocketConnect(ws, connections, connectionId)
    },
  }
}

export type CreateWebsocketServerTransportOptions = {
  readonly serverOptions: import('ws').ServerOptions
  readonly brokenConnectionCheckDelayMs?: number
  readonly onConnection?: (
    connectionId: Uuid,
    websocket: WebSocket,
  ) => readonly [WebSocket, Disposable]
}

// Only supports Node, can manage many connections
// Buffering is handled via hydrated-ws
export function createWebsocketServerTransport({
  serverOptions,
  brokenConnectionCheckDelayMs = 30 * 1000,
  onConnection,
}: CreateWebsocketServerTransportOptions): JsonRpcTransport {
  const ws = require('ws')

  return {
    init: ({ connections }) => {
      const server: import('ws').Server = new ws.Server(serverOptions)
      const disposables: Disposable[] = []

      server.on('connection', socket => {
        let ws: WebSocket = new Tank(socket as any)
        const connectionId = createUuid()

        if (onConnection) {
          const [wrapped, disposable] = onConnection(connectionId, ws)

          ws = wrapped
          disposables.push(disposable)
        }

        disposables.push(wrapWebsocketConnect(ws, connections, connectionId))
      })

      const interval = setInterval(function ping() {
        server.clients.forEach((ws: any) => {
          if (ws.isAlive === false) {
            return ws.close()
          }

          ws.isAlive = false
          ws.ping(noOp)
        })
      }, brokenConnectionCheckDelayMs)

      disposables.push({ dispose: () => clearInterval(interval) })

      return disposeAll(disposables)
    },
  }
}

function wrapWebsocketConnect(
  ws: WebSocket,
  connections: Subscription<ConnectionEvent>,
  connectionId: Uuid,
) {
  const context = createMessageContext()
  const connection: Connection = {
    id: connectionId,
    context,
  }
  let disposable: Disposable = Disposable.None
  const cleanup = () => {
    connections.publish({ type: 'remove', connection })
    disposable.dispose()
  }
  const dispose = () => {
    ws.close(-1, 'Disposed')
    cleanup()
  }

  // Support polling for broken connections on Node
  if ((ws as any).on) {
    ;(ws as any).on('pong', function(this: any) {
      this.isAlive = true
    })
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
