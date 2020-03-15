import { Disposable } from '@typed/disposable'
import { always, pipe } from '@typed/lambda'
import { describe, given, it } from '@typed/test'
import { Pure } from './Env'
import { runPure } from './runPure'

export const test = describe(`Env`, [
  describe(`of`, [
    given(`a value`, [
      it(`returns a function which takes a callback for the value`, ({ same }) => {
        const value = {}

        runPure(pipe(same(value), always(Disposable.None)), Pure.of(value))
      }),
    ]),
  ]),
])
