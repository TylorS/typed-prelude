import { Disposable } from '@typed/disposable'
import { hasOwnProperty } from '@typed/objects'
import { IncomingMessage } from 'http'
import { isBrowser } from '../common/executionEnvironment'
import { HttpEnv, HttpOptions, HttpResponse } from './types'

const IS_HTTPS = /https/

/**
 * Creates an Http Environment that works in browser and node.
 */
export function createHttpEnv(): HttpEnv {
  return { http: httpRequest }
}

function httpRequest(
  url: string,
  options: HttpOptions,
  resolve: (response: HttpResponse) => void,
  reject: (error: Error) => void,
) {
  return isBrowser
    ? browserHttpRequest(url, options, resolve, reject)
    : nodeHttpRequest(url, options, resolve, reject)
}

function nodeHttpRequest(
  url: string,
  options: HttpOptions,
  resolve: (response: HttpResponse) => void,
  reject: (error: Error) => void,
): Disposable {
  const { method = 'GET', headers, body } = options
  const protocol = IS_HTTPS.test(url) ? 'https:' : 'http:'
  const http = protocol === 'https:' ? require('https') : require('http')

  const request = http.request(url, { method, headers, protocol }, (response: IncomingMessage) => {
    const data: string[] = []

    response.setEncoding('utf8')
    response.on('data', chunk => data.push(chunk.toString()))
    response.on('error', reject)
    response.on('close', () => {
      const headersMap: Record<string, string | undefined> = {}

      for (const header in response.headers) {
        if (hasOwnProperty(header, response.headers)) {
          const value = response.headers[header]

          headersMap[header] = Array.isArray(value) ? value.join(': ') : value
        }
      }

      resolve({
        responseText: data.join(''),
        status: response.statusCode as number,
        statusText: response.statusMessage as string,
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
  resolve: (response: HttpResponse) => void,
  reject: (error: Error) => void,
): Disposable {
  const { method = 'GET', headers, body } = options
  const request = new XMLHttpRequest()
  request.onerror = () => reject(new Error(request.statusText))

  request.addEventListener('load', () => {
    const headers = request.getAllResponseHeaders()

    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(/[\r\n]+/)

    // Create a map of header names to values
    const headerMap: Record<string, string> = {}
    arr.forEach((line: string) => {
      const parts = line.split(': ')
      const header = parts.shift() as string
      const value = parts.join(': ')
      headerMap[header] = value
    })

    resolve({
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
