import { Flatten, Json, UnNest } from '@typed/common'
import { Effects } from '@typed/effects'
import { Ref } from '@typed/hooks'
import { ComparableValues } from '@typed/lambda'
import { ValuesOf } from '@typed/objects'
import { RecordDiff } from './StrMap'

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
  node: Node | undefined
}

export interface CommentVNode {
  readonly type: VNodeType.Comment
  readonly comment: string
  readonly key: ComparableValues | undefined

  node: Node | undefined
}

export interface HtmlVNode<E extends {} = any, A extends TagName = HtmlTagName, B = VNodeChildren> {
  readonly type: VNodeType.Html
  readonly tagName: A
  readonly props: (VNodeProps<E, A> & PropsFrom<A>) | null
  readonly children: B

  node: NodeFrom<A> | undefined
  listener: EventListener | undefined
}

export interface SvgVNode<E extends {} = any, A extends TagName = SvgTagName, B = VNodeChildren> {
  readonly type: VNodeType.Svg
  readonly tagName: A
  readonly props: (VNodeProps<E, A> & PropsFrom<A>) | null
  readonly children: B
  node: NodeFrom<A> | undefined
  listener: EventListener | undefined
}

/**
 * Meant to be extended by external modules
 */
export interface VNodeProps<E extends {}, A extends TagName> {
  // For faster rendering of children
  readonly key?: ComparableValues

  // For keeping references in @typed/hooks
  readonly ref?: Ref<NodeFrom<A>>
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

// WITH ELEMENTS
export type ElementVNode<
  E extends {} = any,
  A extends TagName = any,
  B extends VNodeChildren = any
> = TextElementVNode | CommentElementVNode | HtmlElementVNode<E, A, B> | SvgElementVNode<E, A, B>

export interface ElementVNodeChildren extends ReadonlyArray<ElementVNode> {}

export type ElementTypes = HtmlElementVNode<any> | SvgElementVNode<any>

// Add relevant node to object
export type ToElement<A extends VNode> = A extends TextVNode
  ? TextElementVNode
  : A extends HtmlVNode<infer E, infer A, infer B>
  ? HtmlElementVNode<E, A, ToElements<B>>
  : A extends SvgVNode<infer E, infer A, infer B>
  ? SvgElementVNode<E, A, ToElements<B>>
  : CommentElementVNode

export type ToElements<A> = {
  readonly [K in ElementKeys<A>]: ToElement<A[K]>
}

export type ElementKeys<A> = {
  [K in keyof A]: A[K] extends VNode ? K : never
}[keyof A]

export interface TextElementVNode extends TextVNode {
  readonly node: NodeOf<TextVNode>
}

export interface CommentElementVNode extends CommentVNode {
  readonly node: NodeOf<CommentVNode>
}

export interface HtmlElementVNode<
  E extends {} = {},
  A extends TagName = TagName,
  B = ElementVNodeChildren
> extends HtmlVNode<E, A, B> {
  readonly node: NodeFrom<A>
}

export interface SvgElementVNode<
  E extends {} = {},
  A extends TagName = TagName,
  B = ElementVNodeChildren
> extends SvgVNode<E, A, B> {
  readonly node: NodeFrom<A>
}

// INTERNAL TYPES

type ValidProperties<A> = {
  [K in keyof A]: A[K] extends Json ? K : never
}[Exclude<WritableKeysOf<A>, ExcludedKeys>]

type ExcludedKeys = 'outerHTML' | 'textContent'

export type WritableKeysOf<A> = {
  [K in keyof A]: IfEquals<{ [Key in K]: A[K] }, { -readonly [Key in K]: A[K] }, K, never>
}[keyof A]

type IfEquals<A, B, C, D> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
  ? C
  : D

type ToConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [VNodeEnv<T>, ToConsList<TS>]
  : never
