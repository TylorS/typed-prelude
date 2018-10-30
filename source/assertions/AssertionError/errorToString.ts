import { green, red } from '../../common/colors'
import { diff } from './diff'
import { padNewLine } from './helpers'
import { isAssertionError } from './isAssertionError'

export function errorToString(error: Error): string {
  if (isAssertionError(error)) {
    return (
      `AssertionError: ${error.message}\n` +
      `  ${red('-')} expected ${green('+')} actual\n` +
      padNewLine(2, `\n${diff(error.expected, error.actual)}`)
    )
  }

  if (error.stack) {
    if (error.stack.indexOf(error.message) > -1) {
      return error.stack
    }

    return `Error: ${error.message}\n  ` + error.stack
  }

  return `Error: ${error.message}`
}
