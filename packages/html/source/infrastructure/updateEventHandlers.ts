import { Effects, get, runEffects } from '@typed/effects'
import { fromJust, isNothing, Just } from '@typed/maybe'
import { isEmpty } from '@typed/objects'
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
  if (isEmpty(removed) && isEmpty(updated)) {
    return vNode
  }

  const node = yield* getNodeOrThrow(vNode)
  const listener = yield* getListener(vNode)

  for (const [eventType, eventHandler] of removed) {
    node.removeEventListener(eventType as string, listener, getOptions(eventHandler))
  }

  for (const [eventType, eventHandler] of updated) {
    node.addEventListener(eventType as string, listener, getOptions(eventHandler))
  }

  return vNode
}

function* getListener<E, A extends ElementTypes>(vNode: A) {
  if (isNothing(vNode.listener.current)) {
    const listener = yield* createListener<E, A>(vNode)

    vNode.listener.current = Just.of(listener)

    return listener
  }

  const listener = fromJust(vNode.listener.current)

  ;(listener as any).vNode = vNode

  return listener
}

function* createListener<E, A extends ElementTypes>(
  vNode: A,
): Effects<E, EventListener & { vNode: A }> {
  const env = yield* get()
  function listener(event: Event) {
    const vNode: A = (listener as any).vNode as A
    const handler = (vNode.props?.on as Record<string, EventHandler<any, any, any, any>>)?.[
      event.type
    ]

    if (handler) {
      runEffects(isBubblingEventHandler(handler) ? handler(event) : handler[1](event), env)
    }
  }

  listener.vNode = vNode

  return listener
}
