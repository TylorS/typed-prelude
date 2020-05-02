import { combine, Effects } from '@typed/effects'
import {
  comment,
  CommentElementVNode,
  ElementToVNode,
  ElementVNode,
  ElementVNodeChildren,
  html,
  HtmlElementVNode,
  HtmlTagName,
  svg,
  SvgElementVNode,
  SvgTagName,
  text,
  TextElementVNode,
} from '../domain'
import { SVG_NAMESPACE } from './constants'

export const elementToVNode: ElementToVNode<unknown> = function* <
  A extends Text | Comment | HTMLElement | SVGElement
>(node: A): Effects<unknown, ElementVNode<{}>> {
  if (node.nodeType === Node.TEXT_NODE) {
    return { ...text(node.textContent ?? ''), node: node as Text } as TextElementVNode
  }

  if (node.nodeType === Node.COMMENT_NODE) {
    return { ...comment(node.textContent ?? ''), node: node as Comment } as CommentElementVNode
  }

  if (node.namespaceURI === SVG_NAMESPACE) {
    const element: SVGElement = node as any

    return {
      ...svg(
        element.tagName.toLowerCase() as SvgTagName,
        { id: element.id, className: element.className } as any,
        yield* combine(
          ...Array.from(
            element.childNodes as NodeListOf<Text | Comment | HTMLElement | SVGElement>,
          ).map(elementToVNode),
        ),
      ),
      element,
    } as SvgElementVNode
  }

  const element: HTMLElement = node as any

  return {
    ...html<HtmlTagName, {}, ElementVNodeChildren>(
      element.tagName.toLowerCase() as HtmlTagName,
      { id: element.id, className: element.className } as any,
      yield* combine(
        ...Array.from(
          element.childNodes as NodeListOf<Text | Comment | HTMLElement | SVGElement>,
        ).map(elementToVNode),
      ),
    ),
    element,
  } as HtmlElementVNode
}
