import { createTestEnv, handle } from '@typed/env'
import { Loading, RemoteData } from '@typed/remote-data'
import { describe, given, it } from '@typed/test'
import {
  createFailedResponse,
  createSuccessfulResponse,
  createTestHttpEnv,
} from './createTestHttpEnv'
import { http } from './http'
import { withHttpManagement } from './withHttpManagement'

export const test = describe(`withHttpManagement`, [
  given(`some options and an HttpEnv`, [
    it(`returns a new HttpEnv that caches requests`, ({ equal }) => {
      const { timer, recordEvents, getEvents } = createTestEnv<RemoteData>()
      const success = createSuccessfulResponse({ status: 204 })
      const failed = createFailedResponse(new Error('Failed'))
      const expectedUrl = 'http://somewhere.com'
      const expiration = 1000
      const original = createTestHttpEnv(url => (url === expectedUrl ? success : failed), timer)
      const httpEnv = withHttpManagement({ timer, expiration }, original)
      const successRequest = handle(httpEnv, http(expectedUrl))
      const failedRequest = handle(httpEnv, http('anywhere'))
      const expectedSuccessEvents = [Loading, success]
      const expectedFailedEvents = [Loading, failed]

      recordEvents(successRequest)
      recordEvents(failedRequest)
      timer.timePast(1)

      equal([success, failed], original.getResponses())
      equal(expectedSuccessEvents, getEvents(successRequest))
      equal(expectedFailedEvents, getEvents(failedRequest))

      recordEvents(successRequest)
      recordEvents(failedRequest)
      timer.timePast(expiration + 1)

      equal([success, failed, failed], original.getResponses())
      equal([...expectedSuccessEvents, success], getEvents(successRequest))
      equal([...expectedFailedEvents, ...expectedFailedEvents], getEvents(failedRequest))

      recordEvents(successRequest)
      recordEvents(failedRequest)
      timer.timePast(1)

      equal([success, failed, failed, success, failed], original.getResponses())
      equal(
        [...expectedSuccessEvents, success, ...expectedSuccessEvents],
        getEvents(successRequest),
      )
      equal(
        [...expectedFailedEvents, ...expectedFailedEvents, ...expectedFailedEvents],
        getEvents(failedRequest),
      )
    }),
  ]),
])
