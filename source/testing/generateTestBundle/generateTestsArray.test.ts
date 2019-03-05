import { describe, given, it } from '@typed/test'
import { generateTestsArray } from './generateTestsArray'

export const test = describe(`generateTestsArray`, [
  given(`a number of tests`, [
    it(`returns an array of tests`, ({ equal }) => {
      equal('const tests = [test0, test1, test2, test3];', generateTestsArray(4))
      equal('const allTests = [test0, test1, test2, test3];', generateTestsArray(4, 'allTests'))
    }),
  ]),
])
