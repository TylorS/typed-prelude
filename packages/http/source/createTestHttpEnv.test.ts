import { Either } from '@typed/either'
import { createTestEnv, handle } from '@typed/env'
import { Loadable, Loading } from '@typed/loadable'
import { describe, given, it } from '@typed/test'
import { createHttpResponse, createTestHttpEnv } from './createTestHttpEnv'
import { http } from './http'
import { HttpResponse, LoadableResponse } from './types'

export const test = describe(`createTestHttpEnv`, [
  given(`options`, [
    it(`returns test-friendly http environment`, async ({ equal }) => {
      const expectedResponse = Either.of<HttpResponse, Error>(createHttpResponse())
      const failedResponse = Either.left<Error, HttpResponse>(new Error('Endpoint does not exist'))
      const expectedUrl = 'http://example.com'
      const testEnv = createTestEnv<LoadableResponse>()
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
      equal(
        [Loading, Loadable.of(expectedResponse), Loading, Loadable.of(failedResponse)],
        testEnv.getAllEvents(),
      )
    }),
  ]),
])
