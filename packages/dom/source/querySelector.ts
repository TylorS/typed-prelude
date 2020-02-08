import { Maybe } from '@typed/maybe'

export function querySelector<A extends Element, B extends Element = A>(
  cssSelector: string,
  node: A,
): Maybe<B> {
  return Maybe.of(node.querySelector(cssSelector) as B)
}

export function querySelectorAll<A extends Element, B extends Element = A>(
  cssSelector: string,
  node: A,
): readonly B[] {
  return Array.from(node.querySelectorAll(cssSelector))
}
