import { MessageDirection } from '../model'

export function getOppositeDirection(direction: MessageDirection): MessageDirection {
  return direction === MessageDirection.Incoming
    ? MessageDirection.Outgoing
    : MessageDirection.Incoming
}
