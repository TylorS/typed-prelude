import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import { isValidStatus } from './isValidStatus'
import { HttpOptions, HttpRequest, HttpResponse } from './types'

export function http<A = unknown>(url: string, options: HttpOptions = {}): HttpRequest<A> {
  return Future.create((reject, resolve, { http }) =>
    http(url, options, {
      success: response => (handleSuccess(response, reject, resolve), Disposable.None),
      failure: error => (reject(error), Disposable.None),
    }),
  )
}

function handleSuccess<A>(
  response: HttpResponse<A>,
  reject: (error: Error) => void,
  resolve: (value: HttpResponse<A>) => void,
) {
  if (isValidStatus(response)) {
    return resolve(response)
  }

  const errorMessage = response.responseText || response.statusText

  return reject(new Error(errorMessage))
}
