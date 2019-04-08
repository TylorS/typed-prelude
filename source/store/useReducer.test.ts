import { chain, repeat, runPure } from '@typed/env'
import { describe, given, it } from '@typed/test'
import { createStore } from './Store'
import { StoreReducer, useReducer } from './useReducer'

export const test = describe(`useReducer`, [
  given(`a reducer, an env, a store`, [
    it(`composes the store with a new dispatch function`, ({ equal }) => {
      type State = number
      type Count = 'inc' | 'dec'
      const inititalState = 0
      const reducer: StoreReducer<{}, State, Count> = (state, action) => {
        switch (action) {
          case 'inc':
            return state + 1
          case 'dec':
            return state - 1
        }

        return state
      }
      const store = createStore(inititalState)
      const dispatch = useReducer(reducer, {}, store)

      runPure(equal(inititalState), store.getState)

      const inc = dispatch('inc')
      const dec = dispatch('dec')
      const expected = 2
      const program = chain(() => repeat(3, inc), dec)

      runPure(equal(expected), program)
    }),
  ]),
])
