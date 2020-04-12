import { Disposable } from '@typed/disposable'
import { Computation } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import { Connection } from './Connection'

// Clients
export interface CreateConnection<E> extends Computation<[], E, Connection> {}

// Servers
export interface GetConnections<E> extends Computation<[], E, ReadonlyArray<Connection>> {}

export interface OnConnection<E>
  extends Computation<[Arity1<Connection, Disposable>], E, Disposable> {}
