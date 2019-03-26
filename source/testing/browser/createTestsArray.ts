import { range } from '@typed/list'

export function createTestsArray(numberOfTests: number): string {
  const tests = range(0, numberOfTests)
    .map(testNumber => `test${testNumber}`)
    .join(`,`)

  return `[${tests}]`
}
