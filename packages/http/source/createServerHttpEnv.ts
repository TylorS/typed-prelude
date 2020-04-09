import { Disposable } from '@typed/disposable'
import { hasOwnProperty } from '@typed/objects'
import { IncomingMessage } from 'http'
import { HttpCallbacks, HttpEnv, HttpOptions } from './types'
import { withHttpManagement, WithHttpManagementOptions } from './withHttpManagement'

const IS_HTTPS = /https/

/**
 * Creates an Http Environment that works in browser and node.
 */
export function createServerHttpEnv(options?: WithHttpManagementOptions): HttpEnv {
  const env: HttpEnv = { http: nodeHttpRequest }

  return options ? withHttpManagement(options, env) : env
}

function nodeHttpRequest(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
  const { success, failure } = callbacks
  const { method = 'GET', headers, body } = options
  const protocol = IS_HTTPS.test(url) ? 'https:' : 'http:'
  const http = protocol === 'https:' ? require('https') : require('http')
  const disposable = Disposable.lazy()

  const request = http.request(
    url,
    { method, headers: { 'Accept-Encoding': 'br,gzip,deflate', ...headers }, protocol },
    (response: IncomingMessage) => {
      let responseText: string = ''
      let errored = false

      switch (response.headers['content-encoding']) {
        case 'br':
          response = response.pipe(require('zlib').createBrotliDecompress())
          break
        case 'gzip':
          response = response.pipe(require('zlib').createGunzip())
          break
        case 'deflate':
          response = response.pipe(require('zlib').createInflate())
          break
      }

      response.on('data', (chunk) => (responseText += chunk.toString()))
      response.on('error', (error) => {
        errored = true
        disposable.addDisposable(failure(error))
      })
      response.on('end', () => {
        if (errored) {
          return
        }

        const headersMap: Record<string, string | undefined> = {}

        for (const header in response.headers) {
          if (hasOwnProperty(header, response.headers)) {
            const value = response.headers[header]

            headersMap[header] = Array.isArray(value) ? value.join(': ') : value
          }
        }

        disposable.addDisposable(
          success({
            responseText,
            status: response.statusCode!,
            statusText: response.statusMessage!,
            headers: headersMap,
          }),
        )
      })
    },
  )

  if (body) {
    request.write(body)
  }

  request.end()

  disposable.addDisposable({ dispose: () => request.abort() })

  return disposable
}
