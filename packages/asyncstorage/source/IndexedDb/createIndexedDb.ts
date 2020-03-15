import { co, Effect, get } from '@typed/effects'
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

export const createIndexedDb: <A>(
  name: string,
) => Effect<IndexedDbEnv, Either<Error, AsyncStorage<A>>> = co(function*<A>(name: string) {
  const { indexedDbFactory } = yield* get<IndexedDbEnv>()
  const database = yield* openDatabase(name, indexedDbFactory)

  return map(db => createIndexedDbAsyncStorage<A>(db, indexedDbFactory), database)
}) as <A>(name: string) => Effect<IndexedDbEnv, Either<Error, AsyncStorage<A>>>

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
    getKeys: co(getKeys),
    getItems: co(getItems),
    getItem: co(getItem),
    setItem: co(setItem),
    removeItem: co(removeItem),
    clear: () => destroyDb(database.name, indexedDbFactory),
    dispose: () => database.close(),
  }
}
