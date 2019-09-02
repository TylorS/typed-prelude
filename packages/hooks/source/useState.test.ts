import { describe, given, it } from '@typed/test'
import { createDefaultHooks } from './hooks'
import { createManager } from './manager'

const { withHooks, createHook } = createManager()
const { useState } = createDefaultHooks(createHook)

export const test = describe(`useState`, [
  given(`a starting value`, [
    it(`returns a tuple of current state and a fn to update that state`, ({ same, equal }) => {
      const state1 = { value: 1 }
      const state2 = { value: 2 }

      const fn = withHooks(() => useState(state1))

      same(fn(), fn())
      same(state1, fn()[0])
      same(fn()[1], fn()[1])

      const [, updateState] = fn()

      updateState(state2)

      same(state2, fn()[0])

      updateState(({ value }) => ({ value: value + 1 }))

      equal({ value: 3 }, fn()[0])
    }),

    it(`can be used multiple times`, ({ equal }) => {
      const state1A = 1
      const state2A = 2
      const state1B = 'a'
      const state2B = 'b'
      const fn = withHooks(() => {
        const a = useState(state1A)
        const b = useState(state1B)

        return { a, b }
      })

      equal(state1A, fn().a[0])
      equal(state1B, fn().b[0])

      fn().a[1](state2A)

      equal(state2A, fn().a[0])
      equal(state1B, fn().b[0])

      fn().b[1](state2B)

      equal(state2A, fn().a[0])
      equal(state2B, fn().b[0])

      fn.context.dispose()

      equal(state1A, fn().a[0])
      equal(state1B, fn().b[0])
    }),
  ]),
])
