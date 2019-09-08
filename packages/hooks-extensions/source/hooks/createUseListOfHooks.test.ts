import { createDefaultHooks, createManager } from '@typed/hooks'
import { describe, it } from '@typed/test'
import { createVirtualTimer, interval } from '@typed/timer'
import { HooksManagerChannel } from '../channels/HooksManagerChannel'
import { createUseListOfHooks } from './createUseListOfHooks'

export const test = describe(`createUseListOfHooks`, [
  it(`manages hooks contexts for a list by key`, ({ equal }) => {
    const timer = createVirtualTimer()
    const manager = createManager(timer)
    const { withHooks, createHook } = manager
    const { useState, useEffect, useProvider } = createDefaultHooks(createHook)
    const useListOfHooks = createHook(createUseListOfHooks)

    const delay = 1000

    const next = () => {
      timer.timePast(1) // run effects
      timer.timePast(delay + 1) // wait on effects
    }

    const f = ({ id }: { id: number }) => {
      const [state, setState] = useState(() => id)

      useEffect(
        () =>
          interval(
            () => {
              console.log('interval')
              setState(x => x + 1)
            },
            delay,
            timer,
          ),
        { timer },
      )

      return state * 100
    }

    const app = withHooks((list: Array<{ id: number }>) => {
      useProvider(HooksManagerChannel, manager)

      const values = useListOfHooks(f, x => x.id, list)

      return values
    })

    const list = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const [, two, three] = list

    equal([100, 200, 300], app(list))
    next()
    equal([200, 300, 400], app(list))
    next()
    equal([400, 500], app([two, three]))
    next()
    equal([100, 500, 600], app(list))
  }),
])
