import { Effects, get } from '@typed/effects'
import { Either, map } from '@typed/either'
import { AsyncStorage } from '../AsyncStorage'
import { destroyDb } from './destroyDb'
import { getAllKeys } from './getAllKeys'
import { getAllValues } from './getAllValues'
import { getValue } from './getValue'
import { openDatabase } from './openDatabase'
import { putValue } from './putValue'
import { removeValue } from './removeValue'

export type IndexedDbEnv = {
  readonly indexedDbFactory: IDBFactory
}

export function* createIndexedDb<A>(
  name: string,
): Effects<IndexedDbEnv, Either<Error, AsyncStorage<A>>> {
  const { indexedDbFactory } = yield* get<IndexedDbEnv>()
  const database = yield* openDatabase(name, indexedDbFactory)

  return map((db) => createIndexedDbAsyncStorage<A>(db, indexedDbFactory), database)
}

function createIndexedDbAsyncStorage<A>(
  database: IDBDatabase,
  indexedDbFactory: IDBFactory,
): AsyncStorage<A> {
  const read = () => {
    const transaction = database.transaction(database.name, 'readonly')
    const store = transaction.objectStore(database.name)

    return { transaction, store } as const
  }
  const write = () => {
    const transaction = database.transaction(database.name, 'readwrite')
    const store = transaction.objectStore(database.name)
    return { transaction, store } as const
  }

  function* getKeys() {
    const { store } = read()

    return yield* getAllKeys(store)
  }
  function* getItems() {
    const { store } = read()
    return yield* getAllValues<A>(store)
  }

  function* getItem(key: string) {
    const { store } = read()

    return yield* getValue<A>(key, store)
  }

  function* setItem(key: string, value: A) {
    const { store } = write()

    return yield* putValue<A>(key, value, store)
  }

  function* removeItem(key: string) {
    const { store } = write()

    return yield* removeValue<A>(key, store)
  }

  return {
    getKeys,
    getItems,
    getItem,
    setItem,
    removeItem,
    clear: () => destroyDb(database.name, indexedDbFactory),
    dispose: () => database.close(),
  }
}
