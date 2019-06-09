import { Disposable } from '@typed/disposable'
import { addEventListener } from '@typed/dom'
import { Maybe, unpack } from '@typed/maybe'
import * as React from 'react'
import { useDisposable } from './useDisposable'

export function useEventListener<A extends keyof WindowEventHandlersEventMap, B extends Window>(
  eventType: A,
  listener: (event: WindowEventHandlersEventMap[A] & { currentTarget: B }) => void,
  ref: React.MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends keyof SVGElementEventMap, B extends SVGElement>(
  eventType: A,
  listener: (event: SVGElementEventMap[A] & { currentTarget: B }) => void,
  ref: React.MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends keyof HTMLElementEventMap, B extends HTMLElement>(
  eventType: A,
  listener: (event: HTMLElementEventMap[A] & { currentTarget: B }) => void,
  ref: React.MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends keyof ElementEventMap, B extends Element>(
  eventType: A,
  listener: (event: ElementEventMap[A] & { currentTarget: B }) => void,
  ref: React.MutableRefObject<Maybe<B>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends EventTarget>(
  eventType: string,
  listener: (event: Event & { currentTarget: A }) => void,
  ref: React.MutableRefObject<Maybe<A>>,
  options?: EventListenerOptions,
): ReturnType<typeof useDisposable>

export function useEventListener<A extends EventTarget>(
  eventType: string,
  listener: (event: Event & { currentTarget: A }) => void,
  ref: React.MutableRefObject<Maybe<A>>,
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
