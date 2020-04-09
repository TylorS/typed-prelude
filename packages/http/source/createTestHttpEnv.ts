import { Disposable } from '@typed/disposable'
import { Either, fromLeft, fromRight, isLeft, Left, Right } from '@typed/either'
import { isPromiseLike } from '@typed/logic'
import { Json } from './Json'
import { HttpCallbacks, HttpOptions, HttpResponse, TestHttpEnv } from './types'

/**
 * Create a test-friendly http environment
 * @param testHttp :: (url -> HttpOptions -> Either Error HttpResponse)
 * @param timer :: Timer
 */
export function createTestHttpEnv(
  testHttp: (
    url: string,
    options: HttpOptions,
  ) => Either<Error, HttpResponse> | PromiseLike<Either<Error, HttpResponse>>,
): TestHttpEnv {
  const responses: Either<Error, HttpResponse>[] = []

  function http(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
    const { success, failure } = callbacks

    function getResponse() {
      const disposable = Disposable.lazy()

      function onResponse(response: Either<Error, HttpResponse>) {
        responses.push(response)

        if (isLeft(response)) {
          return disposable.addDisposable(failure(fromLeft(response)))
        }

        disposable.addDisposable(success(fromRight(response)))
      }

      const response = testHttp(url, options)

      if (isPromiseLike(response)) {
        response.then(onResponse)
      } else {
        onResponse(response)
      }

      return disposable
    }

    return getResponse()
  }

  return {
    http,
    getResponses: () => responses.slice(),
  }
}

export function createSuccessfulResponse<A = unknown>(options: Partial<HttpResponse<A>> = {}) {
  return Right.of(createHttpResponse<A>(options))
}

export function createFailedResponse(error: Error) {
  return Left.of(error)
}

export function createHttpResponse<A>(options: Partial<HttpResponse<A>> = {}): HttpResponse<A> {
  const response: HttpResponse<A> = {
    status: 200,
    statusText: 'OK',
    responseText: '',
    headers: {},
    ...options,
  }

  return response
}

export function createJsonResponse<A extends Json>(
  jsonReadyValue: A,
  options: Partial<HttpResponse<A>> = {},
): HttpResponse<A> {
  const responseText = JSON.stringify(jsonReadyValue)

  return createHttpResponse<A>({
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
    responseText,
  })
}
