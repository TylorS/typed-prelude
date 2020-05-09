import { Effects, get, runEffects } from '@typed/effects'
import { fromJust, isNothing, Just } from '@typed/maybe'
import { ElementTypes, EventHandler, isBubblingEventHandler, UpdateEventHandlers } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'

const EMPTY: AddEventListenerOptions = {}

function getOptions(eventHandler: EventHandler<any, any, any, any>): AddEventListenerOptions {
  return isBubblingEventHandler(eventHandler) ? EMPTY : eventHandler[0]
}

export const updateEventHandlers: UpdateEventHandlers<PatchFailure> = function* (
  vNode,
  { removed, updated },
) {
  const node = yield* getNodeOrThrow(vNode)
  const listener = getListener(vNode)

  for (const [eventType, eventHandler] of removed) {
    node.removeEventListener(eventType as string, listener, getOptions(eventHandler))
  }

  for (const [eventType, eventHandler] of updated) {
    node.addEventListener(eventType as string, listener, getOptions(eventHandler))
  }

  return vNode
}

function* getListener<A extends ElementTypes>(vNode: A) {
  if (isNothing(vNode.listener.current)) {
    const listener = yield* createListener(vNode)

    vNode.listener.current = Just.of(listener)

    return listener
  }

  return fromJust(vNode.listener.current)
}

function* createListener<E, A extends ElementTypes>(vNode: A): Effects<E, EventListener> {
  const env = yield* get()

  return function listener(event: Event) {
    const handler = (vNode.props?.on as Record<string, EventHandler<any, any, any, any>>)?.[
      event.type
    ]

    if (handler) {
      runEffects(isBubblingEventHandler(handler) ? handler(event) : handler[1](event), env)
    }
  }
}
