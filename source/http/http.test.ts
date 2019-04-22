import { describe, given, it } from '@typed/test'
import { http } from './http'

export const test = describe(`http`, [
  given(`a url and HttpOptions`, [
    it(`returns an Request<A>`, ({ equal }) => {
      const url = 'http://example.com'
      const { runEnv } = http(url)

      runEnv()
    }),
  ]),
])
