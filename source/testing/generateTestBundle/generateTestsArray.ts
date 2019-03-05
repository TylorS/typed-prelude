import { join, range } from '@typed/list'

export function generateTestsArray(numberOfTests: number): string {
  return join(' ', [
    '[',
    range(0, numberOfTests)
      .map(i => `test${i}`)
      .join(','),
    ']',
  ])
}
