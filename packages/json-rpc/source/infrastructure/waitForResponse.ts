import { Disposable } from '@typed/disposable'
import { Effect, Effects } from '@typed/effects'
import { Resume } from '@typed/env'
import {
  ConnectionEnv,
  Id,
  JsonRpcResponse,
  MessageDirection,
  WaitForResponse,
} from '../domain/model'
import { isBatchResponse, isResponse } from '../domain/services/validations'
import { getSubscription } from './getSubscription'

export const waitForResponse: WaitForResponse<ConnectionEnv> = function*(
  requestId: Id,
  direction: MessageDirection,
): Effects<ConnectionEnv, JsonRpcResponse> {
  const subscription = yield* getSubscription(direction)

  return yield* Effect.fromEnv(_ =>
    Resume.create<JsonRpcResponse>(cb => {
      const disposable = Disposable.lazy()
      const subscriptionDisposable = subscription.subscribe(message => {
        if (isResponse(message) && message.id === requestId) {
          disposable.dispose()

          return cb(message)
        }

        if (isBatchResponse(message)) {
          for (const response of message) {
            if (response.id === requestId) {
              disposable.dispose()

              return cb(response)
            }
          }
        }

        return Disposable.None
      })

      disposable.addDisposable(subscriptionDisposable)

      return disposable
    }),
  )
}
