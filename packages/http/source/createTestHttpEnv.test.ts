import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import {
  createFailedResponse,
  createSuccessfulResponse,
  createTestHttpEnv,
} from './createTestHttpEnv'
import { http } from './http'

export const test = describe(`createTestHttpEnv`, [
  given(`options`, [
    it(`returns test-friendly http environment`, ({ equal }, done) => {
      const expectedResponse = createSuccessfulResponse()
      const failedResponse = createFailedResponse(new Error('Endpoint does not exist'))
      const expectedUrl = 'http://example.com'
      const testHttpEnv = createTestHttpEnv((url) =>
        url === expectedUrl ? expectedResponse : failedResponse,
      )
      const request = http(expectedUrl)
      const failedRequest = http('http://somewhere.else')

      function* sut() {
        yield* request
        yield* failedRequest

        equal([expectedResponse, failedResponse], testHttpEnv.getResponses())
        done()
      }

      runEffects(sut(), testHttpEnv)
    }),
  ]),
])
