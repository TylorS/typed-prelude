import { Effects } from '@typed/effects'
import { CombinedEnvsOf, EnvOf, NodeOf, VNode } from './VNode'

/**
 * Converts a DOM node to a VNode for monomorphic patch function
 */
export type ElementToVNode<E> = (
  node: Text | Comment | HTMLElement | SVGElement,
) => Effects<E, VNode<{}>>

/**
 * Given a vNode it creates an element for it
 */
export type CreateElement<E> = <A extends VNode>(vNode: A) => Effects<E & EnvOf<A>, NodeOf<A>>

/**
 * Insert child elements to a parent from a given reference
 */
export type AddElements<E> = <A extends readonly VNode[]>(
  parentNode: Node,
  vNodes: A,
  referenceNode: Node | null,
) => Effects<E & CombinedEnvsOf<A>, void>

/**
 * Remove child elements from a given parent node. Must remove .ref on removed elements
 */
export type RemoveElements<E> = <A extends readonly VNode[]>(
  parentNode: Node,
  vNodes: A,
) => Effects<E & CombinedEnvsOf<A>, void>

/**
 * Patch the differences between two vNodes
 */
export type PatchElement<E> = <A extends VNode, B extends VNode>(
  previous: A,
  updated: B,
) => Effects<E & EnvOf<A> & EnvOf<B>, void>

/**
 * Diff the children of an element
 */
export type UpdateChildren<E> = <A extends readonly VNode[], B extends readonly VNode[]>(
  parentElement: Element,
  children: A,
  updatedChildren: B,
) => Effects<E & CombinedEnvsOf<A> & CombinedEnvsOf<B>, void>
