import { isBrowser } from '@typed/common'
import { Disposable } from '@typed/disposable'
import { noOp } from '@typed/lambda'
import { hasOwnProperty } from '@typed/objects'
import { IncomingMessage } from 'http'
import { HttpCallbacks, HttpEnv, HttpOptions } from './types'
import { withHttpManagement, WithHttpManagementOptions } from './withHttpManagement'

const IS_HTTPS = /https/

/**
 * Creates an Http Environment that works in browser and node.
 */
export function createHttpEnv(options?: WithHttpManagementOptions): HttpEnv {
  const env: HttpEnv = { http: httpRequest }

  return options ? withHttpManagement(options, env) : env
}

function httpRequest(url: string, options: HttpOptions, callbacks: HttpCallbacks) {
  return isBrowser
    ? browserHttpRequest(url, options, callbacks)
    : nodeHttpRequest(url, options, callbacks)
}

function nodeHttpRequest(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
  const { success, failure, onStart } = callbacks
  const { method = 'GET', headers, body } = options
  const protocol = IS_HTTPS.test(url) ? 'https:' : 'http:'
  const http = protocol === 'https:' ? require('https') : require('http')

  const request = http.request(url, { method, headers, protocol }, (response: IncomingMessage) => {
    const data: string[] = []

    if (onStart) {
      onStart()
    }

    response.setEncoding('utf8')
    response.on('data', chunk => data.push(chunk.toString()))
    response.on('error', failure)
    response.on('close', () => {
      const headersMap: Record<string, string | undefined> = {}

      for (const header in response.headers) {
        if (hasOwnProperty(header, response.headers)) {
          const value = response.headers[header]

          headersMap[header] = Array.isArray(value) ? value.join(': ') : value
        }
      }

      success({
        responseText: data.join(''),
        status: response.statusCode!,
        statusText: response.statusMessage!,
        headers: headersMap,
      })
    })
  })

  if (body) {
    request.write(body)
  }

  request.end()

  return { dispose: () => request.abort() }
}

function browserHttpRequest(
  url: string,
  options: HttpOptions,
  callbacks: HttpCallbacks,
): Disposable {
  const { success, failure, onStart } = callbacks
  const { method = 'GET', headers, body } = options
  const request = new XMLHttpRequest()

  request.onerror = () => failure(new Error(request.statusText))
  request.onloadstart = onStart || noOp

  request.addEventListener('load', () => {
    const headers = request.getAllResponseHeaders()

    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(/[\r\n]+/)

    // Create a map of header names to values
    const headerMap: Record<string, string> = {}
    arr.forEach((line: string) => {
      const parts = line.split(': ')
      const header = parts.shift()!
      const value = parts.join(': ')
      headerMap[header] = value
    })

    success({
      responseText: request.responseText,
      status: request.status,
      statusText: request.statusText,
      headers: headerMap,
    })
  })

  if (headers) {
    Object.keys(headers).forEach(header => {
      request.setRequestHeader(header, headers[header] || '')
    })
  }

  request.open(method, url)
  request.send(body)

  return { dispose: () => request.abort() }
}
