import { Either } from '@typed/either/umd'
import { describe, given, it } from '@typed/test'
import { createRequestHandler } from './createRequestHandler'
import { createRequest } from './creators'
import { isSuccessful } from './isSuccessful'
import { Request, Response } from './json-rpc'
import { ResponseData } from './types'

export const test = describe(`createRequestHandler`, [
  given(`a function from params to result`, [
    it(`returns a Request => Response`, async ({ equal }) => {
      type ClientConnectRequest = Request<
        'client/connect',
        { readonly clientId: number; readonly capabilities: string[] }
      >
      type ClientConnectResponse = Response<{ serverId: number; capabilities: string[] }, undefined>

      const handler = createRequestHandler<ClientConnectRequest, ClientConnectResponse>(
        ({ clientId, capabilities }): ResponseData<ClientConnectResponse> => {
          return Either.of({
            serverId: clientId,
            capabilities,
          })
        },
      )
      const request = createRequest<ClientConnectRequest>('client/connect', {
        clientId: 1,
        capabilities: [],
      })
      const response = await handler(request)

      equal(response.id, request.id)
      equal(response.jsonrpc, '2.0')

      if (isSuccessful(response)) {
        const { result } = response

        equal(1, result.serverId)
        equal([], result.capabilities)
      }
    }),
  ]),
])
