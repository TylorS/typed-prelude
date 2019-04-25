import { Disposable } from '@typed/disposable'
import { Either, fromLeft, fromRight, isLeft } from '@typed/either'
import { Timer } from '@typed/timer'
import { HttpCallbacks, HttpOptions, HttpResponse, TestHttpEnv } from './types'

/**
 * Create a test-friendly http environment
 * @param testHttp :: (url -> HttpOptions -> Either Error HttpResponse)
 * @param timer :: Timer
 */
export function createTestHttpEnv(
  testHttp: (url: string, options: HttpOptions) => Either<Error, HttpResponse>,
  timer: Timer,
): TestHttpEnv {
  const responses: Array<Either<Error, HttpResponse>> = []

  function http(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
    const { success, failure, onStart } = callbacks

    function getResponse() {
      if (onStart) {
        onStart()
      }

      const response = testHttp(url, options)

      responses.push(response)

      const cb = (isLeft(response) ? failure : success) as (either: Error | HttpResponse) => void
      const unwrap = (isLeft(response) ? fromLeft : fromRight) as (
        either: Either<Error, HttpResponse>,
      ) => Error | HttpResponse

      cb(unwrap(response))
    }

    return timer.delay(getResponse, 0)
  }

  return {
    http,
    getResponses: () => responses.slice(),
  }
}

export function createSuccessfulResponse(options: Partial<HttpResponse> = {}) {
  return Either.of<HttpResponse, Error>(createHttpResponse(options))
}

export function createFailedResponse(error: Error) {
  return Either.left<Error, HttpResponse>(error)
}

export function createHttpResponse(options: Partial<HttpResponse> = {}): HttpResponse {
  const response: HttpResponse = {
    status: 200,
    statusText: '',
    responseText: '',
    headers: {},
    ...options,
  }

  return response
}

export function createJsonResponse(
  jsonReadyValue: any,
  options: Partial<HttpResponse> = {},
): HttpResponse {
  const responseText = JSON.stringify(jsonReadyValue)

  return createHttpResponse({ ...options, responseText })
}
