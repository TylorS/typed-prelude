import { chain, runPure } from '@typed/env'
import { noOp } from '@typed/lambda'
import { increment } from '@typed/math'
import { describe, given, it } from '@typed/test'
import { createStore } from './Store'

export const test = describe(`createStore`, [
  given(`an initial state`, [
    describe(`getState`, [
      it(`returns initial state`, ({ equal }) => {
        const s = {}
        const { getState } = createStore(s)

        runPure(equal(s), getState)
      }),
    ]),
    describe(`setState`, [
      it(`updates the state`, ({ equal }) => {
        const initial = 1
        const expected = 2
        const { getState, setState } = createStore(initial)

        runPure(equal(initial), getState)
        runPure(equal(expected), setState(() => expected))
      }),
    ]),
    describe(`reset`, [
      it(`returns state back to initial`, ({ equal }) => {
        const initial = 1
        const expected = 2
        const { getState, setState, reset } = createStore(initial)

        runPure(equal(initial), getState)
        runPure(equal(expected), setState(() => expected))
        runPure(equal(initial), reset)
      }),
    ]),

    describe(`subscribe`, [
      given(`a suscriber`, [
        it(`listens for calls to setState`, ({ equal }, done) => {
          const initial = 1
          const expected = [2, 3]
          const store = createStore(initial)
          const program = chain(() => store.setState(increment), store.setState(increment))

          const disposable = store.subscribe(x => equal(expected.shift(), x))

          runPure(noOp, program)

          disposable.dispose()

          runPure(() => done(), program)
        }),
      ]),
    ]),
  ]),
])
