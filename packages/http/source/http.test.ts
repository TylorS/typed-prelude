import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import {
  createHttpResponse,
  createSuccessfulResponse,
  createTestHttpEnv,
} from './createTestHttpEnv'
import { http } from './http'

export const test = describe(`http`, [
  given(`a url`, [
    it(`returns an HttpRequest`, async ({ equal }) => {
      const url = 'http://anywhere.com'
      const request = http(url)
      const response = createSuccessfulResponse(createHttpResponse())
      const httpEnv = createTestHttpEnv(() => response)

      function* sut() {
        equal(response, yield* request)
      }

      runEffects(sut(), httpEnv)
    }),
  ]),
])
