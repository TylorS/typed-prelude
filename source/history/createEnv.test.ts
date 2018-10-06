import { describe, given, it, Test } from '@typed/test'

import { createEnv } from './createEnv'

export const test: Test = describe(`creatEnv`, [
  it(`returns Env with '/' as default location.href`, ({ equal }) => {
    const { location } = createEnv()

    equal('/', location.href)
  }),

  given(`an href`, [
    it(`returns { history: History, location: Location }`, ({ equal }) => {
      const { location, history } = createEnv('https://www.example.com')

      history.pushState(null, '', '/example')

      equal('https://www.example.com/example', location.href)
      equal('https:', location.protocol)
      equal('443', location.port)
    }),
  ]),

  describe(`History`, [
    describe(`pushState`, [
      given(`an href with a different protocol`, [
        it(`updates the location correctly`, ({ equal }) => {
          const { location, history } = createEnv('https://www.example.com')

          const href = 'http://www.example.com'

          history.pushState(null, '', href)

          equal(href, location.href)
        }),
      ]),
    ]),
  ]),
])
