import { describe, given, it, Test } from '@typed/test'

import { isBrowser } from '../common/executionEnvironment'
import { createHistoryEnv } from './createHistoryEnv'

export const test: Test = describe(`createHistoryEnv`, [
  it(`returns Env with '/' as default location.pathname`, ({ equal }) => {
    const { location } = createHistoryEnv()

    equal('/', location.pathname)
  }),

  given(`an href`, [
    it(`returns { history: History, location: Location }`, ({ equal }) => {
      const { location, history } = createHistoryEnv('http://www.example.com')

      history.pushState(null, '', '/example')

      if (!isBrowser) {
        equal('http://www.example.com', location.origin)
        equal('80', location.port)
      }

      equal('/example', location.pathname)
      equal('http:', location.protocol)
    }),
  ]),

  describe(`History`, [
    describe(`pushState`, [
      given(`an href with a different protocol`, [
        it(`updates the location correctly`, ({ equal, ok }) => {
          if (isBrowser) {
            return ok(true)
          }

          const { location, history } = createHistoryEnv('https://www.example.com')

          const href = 'http://www.example.com'

          history.pushState(void 0, '', href)

          equal(href, location.href)
        }),
      ]),
    ]),
  ]),
])
