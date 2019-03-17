import { TestResult } from '../types'

export function findTypeOfResult(result: TestResult): Exclude<TestResult['type'], 'group'> {
  if ('skip' === result.type || 'fail' === result.type || 'pass' === result.type) {
    return result.type
  }

  const skip = result.results.every(x => findTypeOfResult(x) === 'skip')

  if (skip) {
    return 'skip'
  }

  const pass = result.results.every(x => findTypeOfResult(x) === 'pass')

  if (pass) {
    return 'pass'
  }

  return 'fail'
}
