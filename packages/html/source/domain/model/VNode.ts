import { Json } from '@typed/common'
import { Ref } from '@typed/hooks'
import { ComparableValues } from '@typed/lambda'

/**
 * A Virtual Node, used to represent a DOM element
 */
export type VNode<
  E extends {} = {},
  A extends TagName = TagName,
  B extends VNodeChildren = VNodeChildren
> = TextVNode | CommentVNode | HtmlVNode<E, A, B> | SvgVNode<E, A, B>

export const enum VNodeType {
  Text,
  Comment,
  Html,
  Svg,
}

export interface VNodeChildren extends ArrayLike<VNode> {}

export interface TextVNode {
  readonly type: VNodeType.Text
  readonly text: string
  readonly node: Text | undefined
}

export interface CommentVNode {
  readonly type: VNodeType.Comment
  readonly comment: string
  readonly node: Comment | undefined
}

export interface HtmlVNode<E, A extends TagName = HtmlTagName, B = VNodeChildren> {
  readonly type: VNodeType.Html
  readonly tagName: A
  readonly props: (VNodeProps<E, A> & PropsFrom<A>) | null
  readonly children: B
  readonly element: NodeFrom<A> | undefined
}

export interface SvgVNode<E, A extends TagName = SvgTagName, B = VNodeChildren> {
  readonly type: VNodeType.Svg
  readonly tagName: A
  readonly props: (VNodeProps<E, A> & PropsFrom<A>) | null
  readonly children: B
  readonly element: NodeFrom<A> | undefined
}

/**
 * Meant to be extended by external modules
 */
export interface VNodeProps<E, A extends TagName> {
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
  E extends {} = {},
  A extends TagName = TagName,
  B extends VNodeChildren = VNodeChildren
> = ToElement<VNode<E, A, B>>

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
  readonly node: Text
}

export interface CommentElementVNode extends CommentVNode {
  readonly node: Comment
}

export interface HtmlElementVNode<
  E extends {} = {},
  A extends TagName = TagName,
  B = ToElements<VNodeChildren>
> extends HtmlVNode<E, A, ToElements<B>> {
  readonly element: NodeFrom<A>
}

export interface SvgElementVNode<
  E extends {} = {},
  A extends TagName = TagName,
  B = ToElements<VNodeChildren>
> extends SvgVNode<E, A, ToElements<B>> {
  readonly element: NodeFrom<A>
}

// INTERNAL TYPES

type ValidProperties<A> = {
  [K in keyof A]: A[K] extends Json ? K : never
}[Exclude<WritableKeysOf<A>, ExcludedKeys>]

type ExcludedKeys = 'outerHTML' | 'textContent'

type WritableKeysOf<A> = {
  [K in keyof A]: IfEquals<{ [Key in K]: A[K] }, { -readonly [Key in K]: A[K] }, K, never>
}[keyof A]

type IfEquals<A, B, C, D> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
  ? C
  : D
