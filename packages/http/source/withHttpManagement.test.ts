import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
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
      const timer = createVirtualTimer()
      const success = createSuccessfulResponse({ status: 204 })
      const failed = createFailedResponse(new Error('Failed'))
      const expectedUrl = 'http://somewhere.com'
      const expiration = 1000
      const original = createTestHttpEnv((url) => (url === expectedUrl ? success : failed))
      const httpEnv = withHttpManagement({ timer, expiration }, original)
      const successRequest = () => http(expectedUrl)
      const failedRequest = () => http('anywhere')

      function* sut() {
        yield* successRequest()
        yield* failedRequest()

        timer.progressTimeBy(1)

        equal([success, failed], original.getResponses())

        yield* successRequest()
        yield* failedRequest()

        timer.progressTimeBy(expiration + 1)

        equal([success, failed, failed], original.getResponses())

        yield* successRequest()
        yield* failedRequest()

        timer.progressTimeBy(1)

        equal([success, failed, failed, success, failed], original.getResponses())
      }

      runEffects(sut(), httpEnv)
    }),
  ]),
])
