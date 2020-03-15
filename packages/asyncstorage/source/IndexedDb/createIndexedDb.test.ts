import { co, unsafeRun, use } from '@typed/effects'
import { Either, fromLeft, fromRight, isLeft } from '@typed/either'
import { Maybe, Nothing } from '@typed/maybe'
import { describe, given, it } from '@typed/test'
import { AsyncStorage } from '../AsyncStorage'
import { createIndexedDb } from './createIndexedDb'
import { createServerIndexedDbFactory } from './createIndexedDbFactory'

export const test = describe(`createIndexedDb`, [
  describe(`getItem`, [
    given(`a non-existent key`, [
      it(`returns a computation`, ({ equal }, done) => {
        const key = 'key'
        const indexedDbFactory = createServerIndexedDbFactory(true)
        const sut = co(function* sut() {
          const table: Either<Error, AsyncStorage<number>> = yield* createIndexedDb<number>('test')

          if (isLeft(table)) {
            return done(fromLeft(table))
          }

          const actual = yield* fromRight(table).getItem(key)

          try {
            equal(actual, Either.of(Nothing))
            done()
          } catch (error) {
            done(error)
          }
        })

        unsafeRun(use(sut(), { indexedDbFactory }))
      }),
    ]),

    given(`an existing key`, [
      it(`returns a computation`, ({ equal }, done) => {
        const key = 'key'
        const expected = 7
        const indexedDbFactory = createServerIndexedDbFactory(true)
        const sut = co(function* sut() {
          const table = yield* createIndexedDb<number>('test')

          if (isLeft(table)) {
            return done(fromLeft(table))
          }

          const storage = fromRight(table)

          yield* storage.setItem(key, expected)

          const actual = yield* fromRight(table).getItem(key)

          try {
            equal(actual, Either.of(Maybe.of(expected)))
            done()
          } catch (error) {
            done(error)
          }
        })

        unsafeRun(use(sut(), { indexedDbFactory }))
      }),
    ]),
  ]),

  describe(`removeItem`, [
    given(`a key`, [
      it(`removes an item from storage`, ({ equal }, done) => {
        const key = 'key'
        const value = 7
        const indexedDbFactory = createServerIndexedDbFactory(true)

        const sut = co(function* sut() {
          const table = yield* createIndexedDb<number>('test')

          if (isLeft(table)) {
            return done(fromLeft(table))
          }

          const storage = fromRight(table)
          yield* storage.setItem(key, value)
          yield* storage.removeItem(key)

          const actual = yield* fromRight(table).getItem(key)

          try {
            equal(actual, Either.of(Nothing))
            done()
          } catch (error) {
            done(error)
          }
        })

        unsafeRun(use(sut(), { indexedDbFactory }))
      }),
    ]),
  ]),
])
