import { describe, it, Test } from '@typed/test'
import { createAssertionsEnvironment } from './createAssertionsEnvironment'

export const test: Test = describe(`createAssertionsEnvironment`, [
  it(`returns an object containing all assertions`, assert => {
    const { assertions } = createAssertionsEnvironment()

    assert.ok(assertions.hasOwnProperty('equal'))
    assert.ok(assertions.hasOwnProperty('notEqual'))
    assert.ok(assertions.hasOwnProperty('notOk'))
    assert.ok(assertions.hasOwnProperty('ok'))
    assert.ok(assertions.hasOwnProperty('rejects'))
    assert.ok(assertions.hasOwnProperty('same'))
    assert.ok(assertions.hasOwnProperty('throws'))
  }),

  it(`returns an object containing the number of assertions called`, assert => {
    const { context, assertions } = createAssertionsEnvironment()

    assert.same(context.count, 0)

    assertions.ok(true)

    assert.same(context.count, 1)
  }),
])
