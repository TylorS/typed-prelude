import { describe, given, it, Test } from '../test'

import { rejects } from './rejects'

export const test: Test = describe(`rejects`, [
  given(`a rejected promise`, [
    it(`returns a promise continaing the error`, ({ same }) => {
      const promise = Promise.reject(new Error(`foo`))

      return rejects(promise).then((err: Error) => {
        same(err.message, `foo`)
      })
    }),
  ]),

  given(`a resolved promise`, [
    it(`returns a rejected promise`, ({ same }) => {
      const promise = Promise.resolve(1)

      return rejects(promise).then(
        () => {
          throw new Error(`Should not be called`)
        },
        (err: Error) => {
          same(err.message, `Promise did not reject. Resolved with 1`)
        },
      )
    }),
  ]),
])
