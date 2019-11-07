import { Disposable } from '@typed/disposable'
import { collectEvents, handle } from '@typed/env'
import { Loading, RemoteData } from '@typed/remote-data'
import { describe, given, it } from '@typed/test'
import { createHttpResponse } from './createTestHttpEnv'
import { http } from './http'
import { HttpEnv } from './types'

export const test = describe(`http`, [
  given(`a url`, [
    it(`returns an HttpRequest`, async ({ equal }) => {
      const url = 'http://anywhere.com'
      const request = http(url)

      equal(url, request.url)
      equal({}, request.options)
      const response = createHttpResponse()

      const pure = handle<HttpEnv, HttpEnv, RemoteData>(
        {
          http: (_, __, { success, onStart }) => (
            onStart && onStart(), success(response), Disposable.None
          ),
        },
        request,
      )
      const [one, two] = await collectEvents(pure, 2)

      equal(Loading, one)
      equal(RemoteData.of(response), two)
    }),
  ]),
])
