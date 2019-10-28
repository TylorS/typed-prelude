import { Either } from '@typed/either'
import { range } from '@typed/list'
import { describe, given, it } from '@typed/test'
import { createRequestHandler } from './createRequestHandler'
import { createRequest } from './creators'
import { ErrorCodes } from './error-codes'
import { handleRequest } from './handleRequest'
import { isFailure } from './isFailure'
import { isSuccessful } from './isSuccessful'
import { NotificationParams, Request, Response } from './json-rpc'
import { ResponseData } from './types'

export const test = describe(`createRequestHandler`, [
  given(`request and notification handlers`, [
    it(`keeps request count statistics`, async ({ equal }) => {
      const { handler, request, serverId, capabilities } = createClientConnectHandler()
      const response = await handler.handleRequest(request)

      equal(response.id, request.id)
      equal(response.jsonrpc, '2.0')

      if (isSuccessful(response)) {
        const { result } = response

        equal(serverId, result.serverId)
        equal(capabilities, result.capabilities)
      }

      equal(1, handler.stats.requestCount)

      const numberOfRequests = 25

      for (const _ of range(0, numberOfRequests)) {
        await handler.handleRequest(request)
      }

      equal(numberOfRequests + 1, handler.stats.requestCount)
    }),

    it(`keeps open request stats`, async ({ equal }) => {
      const { handler, request } = createClientConnectHandler()
      const promise = handler.handleRequest(request)

      equal(1, handler.stats.openRequestCount)

      await promise

      equal(0, handler.stats.openRequestCount)
    }),

    it(`keeps failed response stats`, async ({ equal }) => {
      const { handler, request } = createClientConnectHandler({ shouldFail: true })

      await handler.handleRequest(request)

      equal(1, handler.stats.failureResponseCount)
    }),

    it(`sends method not found response when unknown request comes in`, async ({ equal }) => {
      const { handler } = createClientConnectHandler({ shouldFail: true })
      const method = 'hello'
      const request = createRequest(method, { thing: 'world' })
      const response = await handler.handleRequest(request as any)

      equal(1, handler.stats.failureResponseCount)
      equal(ErrorCodes.MethodNotFound, response.error.code)
      equal(`Method Not Found: ${method}`, response.error.message)
    }),

    it(`sends internal error response when handler throws`, async ({ equal }) => {
      const { handler, request, errorMessage } = createClientConnectHandler({ shouldThrow: true })
      const response = await handler.handleRequest(request)

      equal(1, handler.stats.failureResponseCount)

      if (isFailure(response)) {
        equal(ErrorCodes.InternalError, response.error.code)
        equal(errorMessage, response.error.message)
      }
    }),
  ]),
])

type Options = {
  serverId?: number
  capabilities?: string[]
  shouldFail?: boolean
  shouldThrow?: boolean
}

function createClientConnectHandler({
  serverId = 1,
  capabilities = [],
  shouldFail = false,
  shouldThrow = false,
}: Options = {}) {
  type ClientConnectRequest = Request<
    'client/connect',
    { readonly clientId: number; readonly capabilities: string[] }
  >
  type ClientConnectResponse = Response<{ serverId: number; capabilities: string[] }, undefined>

  const errorCode = Math.round(Math.random() * 10)
  const errorMessage = 'Failed'

  const handler = createRequestHandler({
    'client/connect': handleRequest<ClientConnectRequest, ClientConnectResponse>(
      ({
        clientId,
        capabilities,
      }: NotificationParams<ClientConnectRequest>): ResponseData<ClientConnectResponse> => {
        if (shouldThrow) {
          throw new Error(errorMessage)
        }

        if (shouldFail) {
          return Either.left({ code: errorCode, message: errorMessage })
        }

        return Either.of({
          serverId: clientId,
          capabilities,
        })
      },
    ),
  })

  const request = createRequest<ClientConnectRequest>('client/connect', {
    clientId: serverId,
    capabilities,
  })

  return {
    handler,
    serverId,
    capabilities,
    request,
    errorCode,
    errorMessage,
  }
}
