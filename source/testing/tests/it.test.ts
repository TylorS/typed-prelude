import { describe, it } from '@typed/test'
import { isRunningTest } from './isRunnableTest'
import { it as itTest } from './it'

export const test = describe(`it`, [
  it(`returns RunningTest`, ({ ok }) => {
    const test = itTest('does things', ({ ok }) => ok(true))

    ok(isRunningTest(test))
  }),
])
