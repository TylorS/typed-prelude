import { createTestEnv, handle } from '@typed/env'
import { Failure, Loading, RemoteData, Success } from '@typed/remote-data'
import { describe, given, it } from '@typed/test'
import { createHttpResponse, createTestHttpEnv } from './createTestHttpEnv'
import { http } from './http'

export const test = describe(`createTestHttpEnv`, [
  given(`options`, [
    it(`returns test-friendly http environment`, async ({ equal }) => {
      const expectedResponse = Success.of(createHttpResponse())
      const failedResponse = Failure.of(new Error('Endpoint does not exist'))
      const expectedUrl = 'http://example.com'
      const testEnv = createTestEnv<RemoteData>()
      const testHttpEnv = createTestHttpEnv(
        url => (url === expectedUrl ? expectedResponse : failedResponse),
        testEnv.timer,
      )
      const request = handle(testHttpEnv, http(expectedUrl))
      const failedRequest = handle(testHttpEnv, http('http://somewhere.else'))

      testEnv.recordEvents(request)
      testEnv.recordEvents(failedRequest)
      testEnv.timer.progressTimeBy(1)

      equal([expectedResponse, failedResponse], testHttpEnv.getResponses())
      equal([Loading, expectedResponse, Loading, failedResponse], testEnv.getAllEvents())
    }),
  ]),
])
