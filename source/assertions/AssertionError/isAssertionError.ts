import { AssertionError } from './AssertionError'

export function isAssertionError(error: Error): error is AssertionError<any> {
  return (
    error instanceof Error && error.hasOwnProperty('expected') && error.hasOwnProperty('actual')
  )
}
