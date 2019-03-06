import { describe, it } from '@typed/test'
import { createDeferred } from './createDeferred'

export const test = describe(`createDeferred`, [
  it(`returns [Promise, A -> void, Error -> void]`, async ({ equal, rejects, same }) => {
    const [successfulPromise, success] = createDeferred<number>()
    const [failedPromise, , failure] = createDeferred<number>()
    const error = new Error('Failed')
    const value = 1

    setTimeout(success, 100, value)
    setTimeout(failure, 100, error)

    const failedError = await rejects(failedPromise)
    const successValue = await successfulPromise

    same(error, failedError)
    equal(value, successValue)
  }),
])
