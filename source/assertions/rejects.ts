import { id } from '../lambda'
import { toString } from '../strings'

export const rejects = <Err extends Error = Error>(promise: Promise<any>): Promise<Err> =>
  promise.then(throwError, id)

function throwError(value: any) {
  const message = `Promise did not reject. Resolved with ${toString(value)}`

  throw new Error(message)
}
