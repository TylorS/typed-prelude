import { Disposable } from '@typed/disposable'
import { Right } from '@typed/either'
import { collectEvents, handle } from '@typed/env'
import { Loadable, Loading } from '@typed/loadable'
import { describe, given, it } from '@typed/test'
import { createHttpResponse } from './createTestHttpEnv'
import { http } from './http'
import { HttpEnv, LoadableResponse } from './types'

export const test = describe(`http`, [
  given(`a url`, [
    it(`returns an HttpRequest`, async ({ equal }) => {
      const url = 'http://anywhere.com'
      const request = http(url)

      equal(url, request.url)
      equal({}, request.options)
      const response = createHttpResponse()

      const pure = handle<HttpEnv, HttpEnv, LoadableResponse>(
        {
          http: (_, __, { success, onStart }) => (
            onStart && onStart(), success(response), Disposable.None
          ),
        },
        request,
      )
      const [one, two] = await collectEvents(pure, 2)

      equal(Loading, one)
      equal(Loadable.of(Right.of(response)), two)
    }),
  ]),
])
