import { dispose } from '@typed/disposable'
import { describe, given, it } from '@typed/test'
import { createSubscription } from './Subscription'

export const test = describe(`Subscription`, [
  describe(`subscribe`, [
    given(`a Subscriber`, [
      it(`returns a Disposable which cancels subscription`, ({ same }) => {
        const value = {}
        let called = 0
        const f = (x: typeof value) => {
          same(value, x)
          called++
        }
        const { subscribe, publish } = createSubscription<typeof value>()

        const disposable = subscribe(f)

        publish(value)
        dispose(disposable)
        publish(value)
        same(1, called)
      }),
    ]),
  ]),
  describe(`publish`, [
    given(`a value`, [
      it(`pushes to all subscribers`, ({ same }) => {
        const expected = [{}, {}, {}]
        let called = 0
        const f = (x: typeof expected[keyof typeof expected]) => same(expected[called], x)
        const g = (x: typeof expected[keyof typeof expected]) => same(expected[called++], x)

        const { subscribe, publish } = createSubscription<typeof expected[keyof typeof expected]>()

        subscribe(f)
        subscribe(g)

        expected.forEach((e) => publish(e))

        same(expected.length, called)
      }),
    ]),
  ]),
])
