import { Either } from '@typed/either'
import { chain, Pure } from '@typed/env'
import { map } from '@typed/future'
import { AsyncStorage } from '../AsyncStorage'
import { createIndexedDbFactory } from './createIndexedDbFactory'
import { destroyDb } from './destroyDb'
import { getAllValues } from './getAllValues'
import { getValue } from './getValue'
import { openDatabase } from './openDatabase'
import { putValue } from './putValue'
import { removeValue } from './removeValue'

export type CreateIndexedDbOptions = {
  readonly name: string
  readonly keyPath?: string
  readonly indexedDbFactory?: IDBFactory
}

export function createIndexedDb<A>(
  options: CreateIndexedDbOptions,
): Pure<Either<Error, AsyncStorage<A>>> {
  const { name, indexedDbFactory = createIndexedDbFactory() } = options
  const database = openDatabase(name, indexedDbFactory)

  return map(db => createIndexedDbAsyncStorage(db, indexedDbFactory), database)
}

function createIndexedDbAsyncStorage<A>(
  database: IDBDatabase,
  indexedDbFactory: IDBFactory,
): AsyncStorage<A> {
  const read = Pure.fromIO(() =>
    database.transaction(database.name, 'readonly').objectStore(database.name),
  )
  const write = Pure.fromIO(() =>
    database.transaction(database.name, 'readwrite').objectStore(database.name),
  )

  return {
    getItems: chain(store => getAllValues<A>(store), read),
    getItem: key => chain(store => getValue(key, store), read),
    setItem: (key, value) => chain(store => putValue<A>(key, value, store), write),
    removeItem: key => chain(store => removeValue(key, store), write),
    clear: destroyDb(database.name, indexedDbFactory),
  }
}
