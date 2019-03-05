import { pipe } from '@typed/lambda'
import { join, map, range } from '@typed/list'

const createTests = pipe(
  range(0),
  map(i => `test${i}`),
  join(', '),
)

export const generateTestsArray = (numberOfTests: number, variableName: string = 'tests'): string =>
  join('', [`const ${variableName} = [`, createTests(numberOfTests), '];'])
