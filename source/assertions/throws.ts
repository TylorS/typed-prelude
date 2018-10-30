import { functionName } from '../common/functionName'

const error = new Error(`Did not throw`)

export function throws<Err extends Error = Error>(fn: () => any): Err {
  try {
    fn()
    throw error
  } catch (e) {
    if (e === error) {
      throw new Error(`Expected '${functionName(fn)}' to throw`)
    }

    return e
  }
}
