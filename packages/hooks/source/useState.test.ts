import { Disposable } from '@typed/disposable'
import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { NodeGenerator } from '@typed/uuid'
import { increment } from '../../math/source'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManager } from './createHooksManager'
import { runWithHooks } from './runWithHooks'
import { InitialState } from './types'
import { useState } from './useState'

export const test = describe(`useState`, [
  given(`an initial state`, [
    it(`returns a current state and updater fn`, ({ equal }, done) => {
      const manager = createHooksManager(new NodeGenerator())
      const hookEnvironment = createHookEnvironment(manager)
      const expectedValues = [1, 2, 3]
      const sut = function* () {
        const [getX, updateX] = yield* useState(InitialState.of(1))
        const expected = expectedValues.shift()
        const actual = yield* getX()

        try {
          equal(expected, actual)
          yield* updateX(increment)

          if (expectedValues.length === 0) {
            done()
          }
        } catch (error) {
          done(error)
        }
      }

      runEffects(runWithHooks(sut(), hookEnvironment))
      runEffects(runWithHooks(sut(), hookEnvironment))
      runEffects(runWithHooks(sut(), hookEnvironment))
    }),
  ]),
])
