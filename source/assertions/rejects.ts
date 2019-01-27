import { id } from '@typed/lambda'
import { toString } from '@typed/strings'

export const rejects = <Err extends Error = Error>(promise: Promise<any>): Promise<Err> =>
  promise.then(throwError, id)

function throwError(value: any) {
  const message = `Promise did not reject. Resolved with ${toString(value)}`

  throw new Error(message)
}
