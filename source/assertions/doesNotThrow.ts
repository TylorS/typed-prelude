import { functionName } from '@typed/common/functionName'
import { AssertionError } from 'power-assert'

export function doesNotThrow(fn: () => void): boolean {
  try {
    fn()

    return true
  } catch (error) {
    const message = `${functionName(fn)} threw Error\n${error.message}`

    throw new AssertionError({ message, stackStartFunction: fn })
  }
}
