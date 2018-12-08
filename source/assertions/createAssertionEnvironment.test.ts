import { describe, it, Test } from '../test'
import { createAssertionEnvironment } from './createAssertionEnvironment'

export const test: Test = describe(`createAssertionsEnvironment`, [
  it(`returns an object containing all assertions`, assert => {
    const { assertions } = createAssertionEnvironment()

    assert.ok(assertions.hasOwnProperty('equal'))
    assert.ok(assertions.hasOwnProperty('notEqual'))
    assert.ok(assertions.hasOwnProperty('notOk'))
    assert.ok(assertions.hasOwnProperty('ok'))
    assert.ok(assertions.hasOwnProperty('rejects'))
    assert.ok(assertions.hasOwnProperty('same'))
    assert.ok(assertions.hasOwnProperty('throws'))
  }),

  it(`returns an object containing the number of assertions called`, assert => {
    const { context, assertions } = createAssertionEnvironment()

    assert.same(context.count, 0)

    assertions.ok(true)

    assert.same(context.count, 1)
  }),
])
