import { Disposable } from '@typed/disposable'
import { Maybe, unpack } from '@typed/maybe'
import { addEventListener } from '../addEventListener'
import { useDisposable } from './useDisposable'

export function useEventListener<A extends keyof WindowEventHandlersEventMap, B extends Window>(
  eventType: A,
  listener: (event: WindowEventHandlersEventMap[A] & { currentTarget: B }) => void,
  ref: MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends keyof SVGElementEventMap, B extends SVGElement>(
  eventType: A,
  listener: (event: SVGElementEventMap[A] & { currentTarget: B }) => void,
  ref: MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends keyof HTMLElementEventMap, B extends HTMLElement>(
  eventType: A,
  listener: (event: HTMLElementEventMap[A] & { currentTarget: B }) => void,
  ref: MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends keyof ElementEventMap, B extends Element>(
  eventType: A,
  listener: (event: ElementEventMap[A] & { currentTarget: B }) => void,
  ref: MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends EventTarget>(
  eventType: string,
  listener: (event: Event & { currentTarget: A }) => void,
  ref: MutableRefObject<Maybe<A>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends EventTarget>(
  eventType: string,
  listener: (event: Event & { currentTarget: A }) => void,
  ref: MutableRefObject<Maybe<A>>,
  options?: EventListenerOptions,
) {
  return useDisposable(
    () =>
      unpack(
        (node: A) => addEventListener(eventType, node, listener, options),
        () => Disposable.None,
        ref.current,
      ),
    [eventType, listener, ref, options],
  )
}
