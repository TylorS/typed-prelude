import { createTestEnv, handle } from '@typed/env'
import { Loading, RemoteData } from '@typed/remote-data'
import { describe, given, it } from '@typed/test'
import { createHttpResponse, createTestHttpEnv } from './createTestHttpEnv'
import { http } from './http'
import { HttpResponse } from './types'

export const test = describe(`createTestHttpEnv`, [
  given(`options`, [
    it(`returns test-friendly http environment`, async ({ equal }) => {
      const expectedResponse = RemoteData.of<Error, HttpResponse>(createHttpResponse())
      const failedResponse = RemoteData.failure<Error, HttpResponse>(
        new Error('Endpoint does not exist'),
      )
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
      testEnv.timer.timePast(1)

      equal([expectedResponse, failedResponse], testHttpEnv.getResponses())
      equal([Loading, expectedResponse, Loading, failedResponse], testEnv.getAllEvents())
    }),
  ]),
])
