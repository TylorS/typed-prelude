import { Effect, Effects, get } from '@typed/effects'
import { Either, map } from '@typed/either'
import { Pure } from '@typed/env'
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

  return map(db => createIndexedDbAsyncStorage<A>(db, indexedDbFactory), database)
}

function createIndexedDbAsyncStorage<A>(
  database: IDBDatabase,
  indexedDbFactory: IDBFactory,
): AsyncStorage<A> {
  const read = Effect.fromEnv(
    Pure.fromIO(() => database.transaction(database.name, 'readonly').objectStore(database.name)),
  )
  const write = Effect.fromEnv(
    Pure.fromIO(() => database.transaction(database.name, 'readwrite').objectStore(database.name)),
  )

  function* getKeys() {
    const store = yield* read

    return yield* getAllKeys(store)
  }

  function* getItems() {
    const store = yield* read

    return yield* getAllValues<A>(store)
  }

  function* getItem(key: string) {
    const store = yield* read

    return yield* getValue<A>(key, store)
  }

  function* setItem(key: string, value: A) {
    const store = yield* write

    return yield* putValue<A>(key, value, store)
  }

  function* removeItem(key: string) {
    const store = yield* write

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
