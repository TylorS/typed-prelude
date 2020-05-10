import { Disposable } from '@typed/disposable'
import { HttpCallbacks, HttpEnv, HttpOptions, HttpResponse } from './types'
import { withHttpManagement, WithHttpManagementOptions } from './withHttpManagement'

export function createFetchHttpEnv(options?: WithHttpManagementOptions): HttpEnv {
  const env: HttpEnv = { http }

  return options ? withHttpManagement(options, env) : env
}

function http(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
  const { success, failure } = callbacks
  const { method = 'GET', headers = {}, body } = options
  const disposable = Disposable.lazy()
  const abortController = new AbortController()

  disposable.addDisposable({
    dispose: () => abortController.abort(),
  })

  const init: RequestInit = {
    method,
    headers: Object.entries(headers).map(([key, value = '']) => [key, value]),
    body,
    signal: abortController.signal,
  }

  const request = fetch(url, init)

  request.then(
    (response) =>
      response.text().then((responseText) => {
        const headers: Record<string, string | undefined> = {}
        response.headers.forEach((value, key) => {
          headers[key] = value
        })

        const httpResponse: HttpResponse = {
          status: response.status,
          statusText: response.statusText,
          responseText,
          headers,
        }

        return disposable.addDisposable(success(httpResponse))
      }),

    (error) => disposable.addDisposable(failure(error)),
  )

  return disposable
}
