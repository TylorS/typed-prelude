import { Flatten, Json, UnNest } from '@typed/common'
import { Effects } from '@typed/effects'
import { Ref } from '@typed/hooks'
import { ComparableValues } from '@typed/lambda'
import { Overwrite, ValuesOf } from '@typed/objects'
import { RecordDiff, StrMap } from './StrMap'

/**
 * A Virtual Node, used to represent a DOM element
 */
export type VNode<E extends {} = any, A extends TagName = any, B extends VNodeChildren = any> =
  | TextVNode
  | CommentVNode
  | HtmlVNode<E, A, B>
  | SvgVNode<E, A, B>

export type UpdateProperties<E> = <A extends ElementTypes>(
  vNode: A,
  diff: RecordDiff<keyof PropsFrom<TagNameOf<A>>, ValuesOf<PropsFrom<TagNameOf<A>>>>,
) => Effects<E, A>

export type ElementTypes = HtmlVNode | SvgVNode

/**
 * Get the individual environment of a given VNode
 */
export type VNodeEnv<A> = A extends HtmlVNode<infer E, any, any>
  ? E
  : A extends SvgVNode<infer E, any, any>
  ? E
  : unknown

/**
 * Get the combined environment of a VNode and it's children
 */
export type EnvOf<A> = VNodeEnv<A> & CombinedEnvsOf<ChildrenOf<A>>

/** Get the tag name of a VNode */
export type TagNameOf<A> = A extends HtmlVNode<any, infer R, any>
  ? R
  : A extends SvgVNode<any, infer R, any>
  ? R
  : never
/**
 * Get the Children of a VNode
 */
export type ChildrenOf<A> = A extends VNode<any, any, infer R> ? (R extends any[] ? R : [R]) : []

/**
 * Get the combined environments of a list of VNodes
 */
export type CombinedEnvsOf<A extends readonly any[]> = UnNest<Flatten<ToConsList<A>, {}>>

/**
 * Get the Node of a given VNode
 */
export type NodeOf<A extends VNode> = A extends TextVNode
  ? Text
  : A extends CommentVNode
  ? Comment
  : NodeFrom<TagNameOf<A>>

export const enum VNodeType {
  Text,
  Comment,
  Html,
  Svg,
}

export interface VNodeChildren extends ReadonlyArray<VNode> {}

export interface TextVNode {
  readonly type: VNodeType.Text
  readonly text: string
  readonly key: ComparableValues | undefined
  readonly node: Ref<Text>
}

export interface CommentVNode {
  readonly type: VNodeType.Comment
  readonly comment: string
  readonly key: ComparableValues | undefined
  readonly node: Ref<Comment>
}

export interface HtmlVNode<E extends {} = any, A extends TagName = HtmlTagName, B = VNodeChildren> {
  readonly type: VNodeType.Html
  readonly tagName: A
  readonly props: (VNodeProps<E, A> & PropsFrom<A>) | null
  readonly children: B
  readonly node: Ref<NodeFrom<A>>
  readonly listener: Ref<EventListener>
}

export interface SvgVNode<E extends {} = any, A extends TagName = SvgTagName, B = VNodeChildren> {
  readonly type: VNodeType.Svg
  readonly tagName: A
  readonly props: (VNodeProps<E, A> & PropsFrom<A>) | null
  readonly children: B
  readonly node: Ref<NodeFrom<A>>
  readonly listener: Ref<EventListener>
}

/**
 * Meant to be extended by external modules
 */
export interface VNodeProps<E extends {}, A extends TagName> {
  // For faster rendering of children
  readonly key?: ComparableValues

  // Allow supplying your own reference
  readonly ref?: Ref<NodeFrom<A>>

  // Generic attribute API
  readonly attrs?: StrMap<string | undefined>

  // Create aria attributes easily
  readonly aria?: StrMap<string>

  // Create data-* attributes easily
  readonly data?: StrMap<string>

  // Declaratively add/remove event handlers
  readonly on?: EventsFrom<E, A>
}

export type TagName = HtmlTagName | SvgTagName

export type HtmlTagName = keyof HTMLElementTagNameMap

export type SvgTagName = keyof SVGElementTagNameMap

/**
 * Lookup an element type by it's tag name
 */
export type NodeFrom<A extends TagName> = A extends HtmlTagName
  ? HTMLElementTagNameMap[A]
  : A extends SvgTagName
  ? SVGElementTagNameMap[A]
  : never

/**
 * Lookup the properties of an element by tag name
 */
export type PropsFrom<A extends TagName> = PropertiesOf<NodeFrom<A>>

/**
 * Get the user-editable properties of a given Node
 */
export type PropertiesOf<A extends Node> = { readonly [K in ValidProperties<A>]?: A[K] }

export type EventMapFrom<A> = A extends HtmlTagName
  ? A extends 'body'
    ? HTMLBodyElementEventMap
    : A extends 'frameset'
    ? HTMLFrameSetElementEventMap
    : A extends 'marquee'
    ? HTMLMarqueeElementEventMap
    : A extends 'media'
    ? HTMLMediaElementEventMap
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
> = (
  event: Overwrite<Map[K], { readonly type: K; readonly currentTarget: NodeFrom<A> }>,
) => Effects<E, any>

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
  (
    event: Overwrite<Map[K], { readonly type: K; readonly currentTarget: NodeFrom<A> }>,
  ) => Effects<E, any>,
]

// INTERNAL TYPES

type ValidProperties<A> = {
  [K in keyof A]: K extends ExcludedKeys
    ? never
    : K extends WritableKeysOf<A>
    ? A[K] extends Json
      ? K
      : never
    : never
}[keyof A]

type ExcludedKeys = 'outerHTML' | 'textContent'

type WritableKeysOf<A> = {
  [K in keyof A]: IfEquals<{ [Key in K]: A[K] }, { -readonly [Key in K]: A[K] }, K, never>
}[keyof A]

type IfEquals<A, B, C, D> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
  ? C
  : D

type ToConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [VNodeEnv<T>, ToConsList<TS>]
  : unknown
