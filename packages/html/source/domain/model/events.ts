import { Effects } from '@typed/effects'
import { RecordDiff } from './StrMap'
import { ElementTypes, EnvOf, HtmlTagName, NodeFrom, SvgTagName, TagName, TagNameOf } from './VNode'

/**
 * Given an ElementVNode, the current events map, and the updated events map -
 * perform the necessary updates to the given ElementVNode and returns that ElementVNode.
 */
export type UpdateEventHandlers<E extends {}> = <A extends ElementTypes>(
  vNode: A,
  diff: RecordDiff<
    keyof EventMapFrom<TagNameOf<A>>,
    EventHandler<
      EnvOf<A>,
      TagNameOf<A>,
      EventMapFrom<TagNameOf<A>>,
      keyof EventMapFrom<TagNameOf<A>>
    >
  >,
) => Effects<E, A>

declare module './VNode' {
  export interface VNodeProps<E, A> {
    readonly on?: EventsFrom<E, A>
  }
}

export type EventMapFrom<A> = A extends HtmlTagName
  ? A extends 'body'
    ? HTMLBodyElementEventMap
    : A extends 'frameset'
    ? HTMLFrameSetElementEventMap
    : A extends 'marquee'
    ? HTMLMarqueeElementEventMap
    : A extends 'media'
    ? HTMLMediaElementEventMap
    : A extends 'video'
    ? HTMLVideoElementEventMap
    : HTMLElementEventMap
  : A extends SvgTagName
  ? SVGElementEventMap
  : never

export type EventsFrom<E extends {}, A extends TagName> = EventsFromMap<E, A, EventMapFrom<A>>

export type EventsFromMap<E extends {}, A extends TagName, Map extends {}> = {
  readonly [K in keyof Map]?: EventHandler<E, A, Map, K>
}

export type EventHandler<E extends {}, A extends TagName, Map extends {}, K extends keyof Map> =
  | BubblingEventHandler<E, A, Map, K>
  | EventHandlerWithOptions<E, A, Map, K>

/**
 * Providing just a function defaults to listing to bubbling events
 */

export type BubblingEventHandler<
  E extends {},
  A extends TagName,
  Map extends {},
  K extends keyof Map
> = (event: { readonly type: K; readonly currentTarget: NodeFrom<A> } & Map[K]) => Effects<E, void>

/**
 * Providing AddEventListenerOptions in a pair allows customizing how the event handler is registered.
 */
export type EventHandlerWithOptions<
  E extends {},
  A extends TagName,
  Map extends {},
  K extends keyof Map
> = readonly [
  AddEventListenerOptions,
  (event: { readonly type: K; readonly currentTarget: NodeFrom<A> } & Map[K]) => Effects<E, void>,
]
