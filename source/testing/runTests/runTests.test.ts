import { Assertions } from '@typed/assertions'
import { zip } from '@typed/list'
import { Overwrite } from '@typed/objects'
import { describe, given, it } from '@typed/test'
import { describe as describeTest, it as itTest, skip } from '../tests'
import { getTestId } from '../tests/getTestId'
import { Test, TestResult } from '../types'
import { runTest } from './runTests'

export const test = describe(`runTests`, [
  given(`a passing Test`, [
    it(`returns its result`, async assertions => {
      const passing = itTest('passes', ({ ok }) => ok(true))

      await assertResult(passing, { type: 'pass', testId: getTestId(passing) }, assertions)
    }),
  ]),

  given(`a failing Test`, [
    it(`returns its result`, async assertions => {
      const failing = itTest('passes', ({ ok }) => ok(false))

      await assertResult(failing, { type: 'fail', testId: getTestId(failing) }, assertions)
    }),
  ]),

  given(`a group Test`, [
    it(`returns its result`, async assertions => {
      const passing = itTest('passes', ({ ok }) => ok(true))
      const failing = itTest('passes', ({ ok }) => ok(false))
      const group = describeTest('Things', [passing, failing])

      await assertResult(
        group,
        {
          type: 'group',
          testId: getTestId(group),
          results: [
            { type: 'pass', testId: getTestId(passing) },
            { type: 'fail', testId: getTestId(failing) },
          ],
        },
        assertions,
      )
    }),
  ]),

  given(`a skipped RunningTest`, [
    it(`returns its result`, async assertions => {
      const passing = itTest('passes', ({ ok }) => ok(true))
      const skipped = skip(passing)

      await assertResult(skipped, { type: 'skip', testId: getTestId(skipped) }, assertions)
    }),
  ]),
])

async function assertResult(
  test: Test,
  result: Overwrite<Partial<TestResult>, { results?: Array<Partial<TestResult>> }>,
  { equal }: Assertions,
): Promise<void> {
  const actualResult = await runTest({ test })

  const keysToTest = Object.keys(result) as Array<keyof TestResult>

  for (const key of keysToTest) {
    const expected = result[key]
    const actual = actualResult[key]

    if (Array.isArray(expected) && Array.isArray(actual)) {
      for (const [a, b] of zip(expected, actual)) {
        const keys = Object.keys(a) as Array<keyof typeof a>

        for (const key of keys) {
          equal(a[key], b[key])
        }
      }
    } else {
      equal(expected, actual)
    }
  }
}
