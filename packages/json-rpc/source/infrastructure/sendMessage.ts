import { ConnectionEnv, SendMessage } from '../domain/model'
import { getSubscription } from './getSubscription'

export const sendMessage: SendMessage<ConnectionEnv> = function* (message, direction) {
  const { publish } = yield* getSubscription(direction)

  return publish(message)
}
