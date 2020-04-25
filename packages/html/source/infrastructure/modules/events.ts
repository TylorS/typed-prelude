import { Effects } from '@typed/effects'
import { HtmlTagName, NodeFrom, SvgTagName, TagName } from '../../domain/model'

declare module '../../domain/model/VNode' {
  export interface VNodeProps<E, A> {
    readonly on?: EventsFrom<E, A>
    readonly onCapture?: EventsFrom<E, A>
  }
}

export type EventsFrom<E extends {}, A> = A extends HtmlTagName
  ? A extends 'body'
    ? EventsFromMap<E, A, HTMLBodyElementEventMap>
    : A extends 'frameset'
    ? EventsFromMap<E, A, HTMLFrameSetElementEventMap>
    : A extends 'marquee'
    ? EventsFromMap<E, A, HTMLMarqueeElementEventMap>
    : A extends 'media'
    ? EventsFromMap<E, A, HTMLMediaElementEventMap>
    : A extends 'video'
    ? EventsFromMap<E, A, HTMLVideoElementEventMap>
    : EventsFromMap<E, A, HTMLElementEventMap>
  : A extends SvgTagName
  ? EventsFromMap<Element, A, SVGElementEventMap>
  : never

export type EventsFromMap<E extends {}, A extends TagName, Map extends {}> = {
  readonly [K in keyof Map]?: (
    event: { type: K; currentTarget: NodeFrom<A> } & Map[K],
  ) => Effects<E, void>
}
