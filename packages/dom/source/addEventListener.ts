import { Disposable } from '@typed/disposable'

export function addEventListener<A extends keyof WindowEventHandlersEventMap, B extends Window>(
  eventType: A,
  node: B,
  listener: (event: WindowEventHandlersEventMap[A] & { currentTarget: B }) => void,
  options?: AddEventListenerOptions,
): Disposable

export function addEventListener<A extends keyof SVGElementEventMap, B extends SVGElement>(
  eventType: A,
  node: B,
  listener: (event: SVGElementEventMap[A] & { currentTarget: B }) => void,
  options?: AddEventListenerOptions,
): Disposable

export function addEventListener<A extends keyof HTMLElementEventMap, B extends HTMLElement>(
  eventType: A,
  node: B,
  listener: (event: HTMLElementEventMap[A] & { currentTarget: B }) => void,
  options?: AddEventListenerOptions,
): Disposable

export function addEventListener<A extends keyof ElementEventMap, B extends Element>(
  eventType: A,
  node: B,
  listener: (event: ElementEventMap[A] & { currentTarget: B }) => void,
  options?: AddEventListenerOptions,
): Disposable

export function addEventListener<A extends EventTarget>(
  eventType: string,
  node: A,
  listener: (event: Event & { currentTarget: A }) => void,
  options?: AddEventListenerOptions,
): Disposable

export function addEventListener<A extends EventTarget>(
  eventType: string,
  node: A,
  listener: (event: Event & { currentTarget: A }) => void,
  options?: AddEventListenerOptions,
): Disposable {
  node.addEventListener(eventType, listener as EventListener, options)

  const dispose = () => node.removeEventListener(eventType, listener as EventListener, options)

  return { dispose }
}
