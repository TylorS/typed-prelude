import { Disposable, disposeAll } from '@typed/disposable'
import { filter } from '@typed/subscription'
import { isBatchableResponse, isResponse, isResponseFor } from './is'
import { isFailure } from './isFailure'
import { Batchable, Id, Message, Notification, Request, Response } from './json-rpc'
import { JsonRpcMessageSender, MessageContext } from './types'

const SECOND = 1000
const MINUTE = 60 * SECOND

export function createMessageSender(context: MessageContext): JsonRpcMessageSender {
  const { incoming, outgoing } = context
  const stats = {
    notificationsSent: 0,
    requestsSent: 0,
    responsesReceived: 0,
    failureResponseCount: 0,
    responseTimeouts: 0,
    responsesSent: 0,
    failedResponsesSent: 0,
  }

  function recordReceivedResponse(response: Response<any, any>) {
    stats.responsesReceived++

    if (isFailure(response)) {
      stats.failureResponseCount++
    }
  }

  function sendNotification(notification: Notification<any, any>) {
    stats.notificationsSent++
    outgoing.publish(notification)
  }

  function sendRequest(
    request: Request<any, any>,
    timeoutMs: number = MINUTE,
  ): Promise<Response<any, any>> {
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        stats.responseTimeouts++

        disposeAll(disposables).dispose()
        reject(
          new Error(
            `Request ${getRequestMethods([request])} (${getRequestIds([
              request,
            ])}) :: Timed out after ${timeoutMs}ms`,
          ),
        )
      }, timeoutMs)

      const disposables: Disposable[] = [
        filter(
          (msg): msg is Response<any, any> => isResponseFor(request.id, msg),
          incoming,
        ).subscribe(response => {
          recordReceivedResponse(response)
          disposeAll(disposables).dispose()
          resolve(response)
        }),
        { dispose: () => clearTimeout(id) },
      ]

      stats.requestsSent++
      outgoing.publish(request)
    })
  }

  function sendBulkRequest(requests: Array<Request<any, any>>, timeoutMs: number = MINUTE) {
    return new Promise<ReadonlyArray<Response<any, any>>>((resolve, reject) => {
      const disposables: Disposable[] = []
      const ids = getRequestIds(requests)
      const idsWithResponses = new Map<Id, Response<any, any>>()

      stats.requestsSent += ids.length

      const id = setTimeout(() => {
        stats.responseTimeouts++

        disposeAll(disposables).dispose()
        reject(new Error(`Bulk Requests (${ids.join(`,`)}) :: Timed out after ${timeoutMs}ms`))
      }, timeoutMs)

      disposables.push({ dispose: () => clearTimeout(id) })
      disposables.push(
        incoming.subscribe(batchable => {
          if (isBatchableResponse(batchable)) {
            for (const response of batchable) {
              if (ids.includes(response.id)) {
                recordReceivedResponse(response)

                idsWithResponses.set(response.id, response)
              }
            }
          } else if (isResponse(batchable as Message)) {
            const response = batchable as Response<any, any>

            if (ids.includes(response.id)) {
              recordReceivedResponse(response)

              idsWithResponses.set(response.id, response)
            }
          }

          if (ids.every(idsWithResponses.has)) {
            disposeAll(disposables).dispose()
            resolve(ids.map(id => idsWithResponses.get(id)!))
          }
        }),
      )
    })
  }

  function sendResponse(batchable: Batchable<Response<any, any>>) {
    for (const response of getResponses(batchable)) {
      stats.responsesSent++

      if (isFailure(response)) {
        stats.failedResponsesSent++
      }
    }

    outgoing.publish(batchable)
  }

  return {
    stats,
    context,
    sendNotification,
    sendRequest,
    sendBulkRequest,
    sendResponse,
  }
}

function getResponses(batchable: Batchable<Response<any, any>>): Array<Response<any, any>> {
  return Array.isArray(batchable) ? batchable : [batchable]
}

function getRequestMethods(requests: Array<Request<any, any>>): string {
  const methods = Array.from(new Set(requests.map(x => x.method)))

  return methods.join(`, `)
}

function getRequestIds(requests: Array<Request<any, any>>): Id[] {
  return Array.from(new Set(requests.map(x => x.id)))
}
