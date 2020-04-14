import { Effects, get } from '@typed/effects'
import { Subscription } from '@typed/subscription'
import { ConnectionEnv, Message, MessageDirection } from '../domain/model'

export function* getSubscription(
  direction: MessageDirection,
): Effects<ConnectionEnv, Subscription<Message>> {
  const { connection } = yield* get<ConnectionEnv>()

  return connection[direction]
}
