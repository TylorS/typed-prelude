import { Effects, get, runEffects } from '@typed/effects'
import { ElementTypes, EventHandler, isBubblingEventHandler, UpdateEventHandlers } from '../domain'

function getOptions(eventHandler: EventHandler<any, any, any, any>): AddEventListenerOptions {
  return isBubblingEventHandler(eventHandler) ? {} : eventHandler[0]
}

export const updateEventHandlers: UpdateEventHandlers<{}> = function* (
  vNode,
  { removed, updated },
) {
  const { node } = vNode
  let listener = vNode.listener

  if (!listener) {
    listener = vNode.listener = yield* createListener(vNode)
  }

  for (const [eventType, eventHandler] of removed) {
    node.removeEventListener(eventType as string, listener, getOptions(eventHandler))
  }

  for (const [eventType, eventHandler] of updated) {
    node.addEventListener(eventType as string, listener, getOptions(eventHandler))
  }

  return vNode
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
