import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { runPure } from '@typed/env'
import { chain, map } from '@typed/future'
import { Maybe, Nothing } from '@typed/maybe'
import { describe, given, it } from '@typed/test'
import { createIndexedDb } from './createIndexedDb'
import { createIndexedDbFactory } from './createIndexedDbFactory'

export const test = describe(`createIndexedDb`, [
  describe(`getItem`, [
    given(`a non-existent key`, [
      it(`returns a computation`, ({ equal }, done) => {
        const key = 'key'
        const table = createIndexedDb<number>({
          name: 'test',
          indexedDbFactory: createIndexedDbFactory(true),
        })
        const get = chain(storage => storage.getItem(key), table)

        runPure(actual => {
          try {
            equal(actual, Either.of(Nothing))
            done()
          } catch (error) {
            done(error)
          }

          return Disposable.None
        }, get)
      }),
    ]),

    given(`an existing key`, [
      it(`returns a computation`, ({ equal }, done) => {
        const key = 'key'
        const expected = 7
        const table = createIndexedDb<number>({
          name: 'test',
          indexedDbFactory: createIndexedDbFactory(true),
        })
        const set = chain(storage => map(() => storage, storage.setItem(key, expected)), table)
        const get = chain(storage => storage.getItem(key), set)

        runPure(actual => {
          try {
            equal(actual, Either.of(Maybe.of(expected)))
            done()
          } catch (error) {
            done(error)
          }

          return Disposable.None
        }, get)
      }),
    ]),
  ]),

  describe(`removeItem`, [
    given(`a key`, [
      it(`removes an item from storage`, ({ equal }, done) => {
        const key = 'key'
        const value = 7
        const table = createIndexedDb<number>({
          name: 'test',
          indexedDbFactory: createIndexedDbFactory(true),
        })
        const set = chain(storage => map(() => storage, storage.setItem(key, value)), table)
        const remove = chain(storage => map(() => storage, storage.removeItem(key)), set)
        const get = chain(storage => storage.getItem(key), remove)

        runPure(actual => {
          try {
            equal(actual, Either.of(Nothing))
            done()
          } catch (error) {
            done(error)
          }

          return Disposable.None
        }, get)
      }),
    ]),
  ]),
])
