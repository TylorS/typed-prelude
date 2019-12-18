import { Env } from '@typed/env'

export type ElementFromName<Name> = Name extends SvgElementTagName
  ? SVGElementTagNameMap[Name]
  : Name extends HtmlElementTagName
  ? HTMLElementTagNameMap[Name]
  : Name extends ElementTagName
  ? ElementTagNameMap[Name]
  : never

export type EventMapFromName<Name> = Name extends SvgElementTagName
  ? SVGElementEventMap
  : Name extends HtmlElementTagName
  ? HTMLElementEventMap
  : Name extends ElementTagName
  ? ElementEventMap
  : never

export type TagName = ElementTagName | HtmlElementTagName | SvgElementTagName
export type ElementTagName = keyof ElementTagNameMap
export type HtmlElementTagName = keyof HTMLElementTagNameMap
export type SvgElementTagName = keyof SVGElementTagNameMap

export type VirtualNode = LazyVirtualNode | TagNameVirtualNode
export type VirtualNodeChildren = ReadonlyArray<VirtualNode | string>

export type TagNameVirtualNode<
  Name extends TagName = TagName,
  Props extends {} = {},
  Children = VirtualNodeChildren
> = {
  readonly type: 'tagName'
  readonly tagName: Name
  readonly props: Props
  readonly key?: string | number
  readonly children?: Children
  readonly element?: ElementFromName<Name>
  readonly parent?: VirtualNode
}

export type LazyVirtualNode<
  E extends {} = {},
  Props extends {} = {},
  Children = VirtualNodeChildren
> = {
  readonly type: 'lazy'
  readonly fn: (props: Props, children: Children) => Generator<Env<E, any>, VirtualNode, unknown>
  readonly props: Props
  readonly children: Children
  readonly key?: string | number
  readonly element?: Element
  readonly parent?: VirtualNode
}
