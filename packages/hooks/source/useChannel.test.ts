import { describe, given, it } from '@typed/test'
import { createChannel } from './createChannel'
import { createDefaultHooks } from './hooks'
import { createManager } from './manager'

const { withHooks, createHook } = createManager()
const { useChannel, useProvider } = createDefaultHooks(createHook)

export const test = describe(`useChannel`, [
  given(`a channel`, [
    it(`allows communicating values across functions`, ({ equal }) => {
      const channel = createChannel(0)
      const h = withHooks(() => {
        const [a, setA] = useProvider(channel)

        const g = withHooks(() => {
          const a = useChannel(channel)

          const f = withHooks(() => useChannel(channel))

          equal(f(), a)

          return a
        })

        equal(a, g())

        return setA
      })

      equal(undefined, h.context.channelValues.get(channel))

      const setA = h()

      equal(1, setA(1))
      equal(1, h.context.channelValues.get(channel))
    }),
  ]),
])
