import { Disposable, disposeAll } from '@typed/disposable'
import { tap } from '@typed/lambda'
import { createSubscription, map, Subscription } from '@typed/subscription'
import { createUuid } from '@typed/uuid'
import { Id } from './json-rpc'
import { Connection, ConnectionEvent, JsonRpcTransport } from './types'

export type JsonRpcConnectionManagerOptions = {
  readonly transports: readonly JsonRpcTransport[]
  readonly multicast?: boolean
}

export interface JsonRpcConnectionManager extends Disposable {
  readonly stats: ConnectionStats
}

export type ConnectionStats = {
  readonly activeConnections: number
}

export function createJsonRpcConnectionManager(
  onConnection: (connection: Connection) => Disposable,
  { transports, multicast = false }: JsonRpcConnectionManagerOptions,
): JsonRpcConnectionManager {
  const stats = {
    activeConnections: 0,
  }
  let connections: Connection[] = []
  const multicastConnection: Connection = {
    id: createUuid(),
    context: {
      incoming: createSubscription(),
      outgoing: map(
        tap(message => connections.forEach(({ context }) => context.outgoing.publish(message))),
        createSubscription(),
      ),
    },
  }
  const connectionEvents: Subscription<ConnectionEvent> = createSubscription()
  const connectionDisposables: Map<Id, Disposable> = new Map()
  const connectionDisposable = connectionEvents.subscribe(({ type, connection }) => {
    if (type === 'remove') {
      stats.activeConnections--
      return handleConnectionRemove(
        connections,
        connectionDisposables,
        multicast,
        multicastConnection.id,
        connection,
      )
    }

    stats.activeConnections++
    handleConnectionAdded(
      connections,
      connectionDisposables,
      multicast,
      multicastConnection,
      connection,
      onConnection,
    )
  })
  const transportDisposables = transports.map(transport =>
    transport.init({ connections: connectionEvents }),
  )

  const dispose = () => {
    const { dispose } = disposeAll([
      connectionDisposable,
      ...transportDisposables,
      ...Array.from(connectionDisposables.values()),
    ])

    dispose()
    connections = []
    connectionDisposables.clear()
  }

  return { stats, dispose }
}

function handleConnectionRemove(
  connections: Connection[],
  disposables: Map<Id, Disposable>,
  multicast: boolean,
  multicastConnectionId: Id,
  connection: Connection,
) {
  const connectionIndex = connections.findIndex(({ id }) => id === connection.id)

  if (connectionIndex > -1) {
    connections.splice(connectionIndex, 1)
  }

  if (disposables.has(connection.id)) {
    disposables.get(connection.id)!.dispose()
    disposables.delete(connection.id)
  }

  if (multicast && connections.length === 0) {
    disposables.get(multicastConnectionId)!.dispose()
    disposables.delete(multicastConnectionId)
  }
}

function handleConnectionAdded(
  connections: Connection[],
  disposables: Map<Id, Disposable>,
  multicast: boolean,
  multicastConnection: Connection,
  connection: Connection,
  onConnection: (connection: Connection) => Disposable,
) {
  const connectionIndex = connections.findIndex(({ id }) => id === connection.id)

  if (connectionIndex === -1) {
    connections.push(connection)
  }

  const connectionToUse = multicast ? multicastConnection : connection

  if (!disposables.has(connectionToUse.id)) {
    disposables.set(
      connectionToUse.id,
      disposeAll([
        onConnection(connectionToUse),
        multicast
          ? connection.context.incoming.subscribe(msg =>
              multicastConnection.context.incoming.publish(msg),
            )
          : Disposable.None,
      ]),
    )
  } else if (multicast) {
    disposables.set(
      connectionToUse.id,
      disposeAll([
        connection.context.incoming.subscribe(msg =>
          multicastConnection.context.incoming.publish(msg),
        ),
        disposables.get(connectionToUse.id)!,
      ]),
    )
  }
}
