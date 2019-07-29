import { describe, given, it } from '@typed/test'
import { createChannel } from './createChannel'
import { useChannel } from './useChannel'
import { useProvider } from './useProvider'
import { withHooks } from './withHooks'

export const test = describe(`useChannel`, [
  given(`a channel`, [
    it(`allows communicating values across functions`, ({ equal }) => {
      const channel = createChannel(0)
      const f = withHooks(() => useChannel(channel))
      const g = withHooks(() => {
        const a = useChannel(channel)

        equal(f(), a)

        return a
      })
      const h = withHooks(() => {
        const [a, setA] = useProvider(channel)

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
