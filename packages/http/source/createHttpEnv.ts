import { Disposable } from '@typed/disposable'
import { HttpCallbacks, HttpEnv, HttpOptions } from './types'
import { withHttpManagement, WithHttpManagementOptions } from './withHttpManagement'

const headerSeparator = ': '
const newLineRegex = /[\r\n]+/

/**
 * Creates an Http Environment that works in browser and node.
 */
export function createHttpEnv(options?: WithHttpManagementOptions): HttpEnv {
  const env: HttpEnv = { http }

  return options ? withHttpManagement(options, env) : env
}

function http(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
  const { success, failure } = callbacks
  const { method = 'GET', headers, body } = options
  const request = new XMLHttpRequest()
  const disposable = Disposable.lazy()

  request.onerror = () => disposable.addDisposable(failure(new Error(request.statusText)))
  request.addEventListener('load', () => {
    const headers = request.getAllResponseHeaders()

    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(newLineRegex)

    // Create a map of header names to values
    const headerMap: Record<string, string> = {}

    arr.forEach((line: string) => {
      const parts = line.split(headerSeparator)
      const header = parts.shift()!
      const value = parts.join(headerSeparator)
      headerMap[header] = value
    })

    disposable.addDisposable(
      success({
        responseText: request.responseText,
        status: request.status,
        statusText: request.statusText,
        headers: headerMap,
      }),
    )
  })

  request.open(method, url)

  if (headers) {
    Object.keys(headers).forEach((header) => {
      request.setRequestHeader(header, headers[header] || '')
    })
  }

  request.send(body)

  return disposable
}
