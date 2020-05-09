import { DomEnv } from '@typed/dom'
import { get } from '@typed/effects'
import { combine, Effect } from '@typed/effects'
import { pipeline } from '@typed/lambda'
import { Just } from '@typed/maybe'
import { dissoc } from '@typed/objects'
import {
  AddElements,
  CommentVNode,
  CreateElement,
  diffAttributes,
  diffRecordMap,
  ElementTypes,
  isHtml,
  isSvg,
  isText,
  NodeOf,
  RecordDiff,
  VNode,
} from '../domain'
import { SVG_NAMESPACE } from './constants'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'
import { updateAriaAttributes } from './updateAriaAttributes'
import { updateAttributes } from './updateAttributes'
import { updateDataList } from './updateDataList'
import { updateEventHandlers } from './updateEventHandlers'
import { updateProperties } from './updateProperties'

const EMPTY: any = {}

export const addElements: AddElements<DomEnv & PatchFailure> = function* (
  parentNode,
  vNodes,
  referenceNode,
) {
  yield* combine(...vNodes.map(createElement))

  for (const vNode of vNodes) {
    parentNode.insertBefore(yield* getNodeOrThrow(vNode), referenceNode ?? null)
  }
}

export const createElement: CreateElement<DomEnv> = function* <A extends VNode>(vNode: A) {
  const { document } = yield* get()
  const node = (isHtml(vNode)
    ? document.createElement(vNode.tagName)
    : isSvg(vNode)
    ? document.createElementNS(SVG_NAMESPACE, vNode.tagName)
    : isText(vNode)
    ? document.createTextNode(vNode.text)
    : document.createComment((vNode as CommentVNode).comment)) as NodeOf<A>

  vNode.node.current = Just.of(node)

  if (isHtml(vNode) || isSvg(vNode)) {
    yield* combine(
      createElementAttributesAndProps(vNode),
      vNode.children.length > 0 ? addElements(node, vNode.children, null) : Effect.of(null),
    )
  }

  return vNode
} as CreateElement<DomEnv>

function* createElementAttributesAndProps<A extends ElementTypes>(vNode: A) {
  const currentProps = vNode.props ?? EMPTY

  yield* combine(
    updateAriaAttributes(vNode, diffRecordMap(EMPTY, currentProps?.aria ?? EMPTY)),
    updateAttributes(vNode, diffAttributes(EMPTY, currentProps?.attrs ?? EMPTY)),
    updateDataList(vNode, diffRecordMap(EMPTY, currentProps?.data ?? EMPTY)),
    updateEventHandlers(
      vNode,
      diffRecordMap(EMPTY, currentProps?.on ?? EMPTY) as RecordDiff<any, any>,
    ),
    updateProperties(
      vNode,
      diffRecordMap(EMPTY, removeReservedProps(currentProps)) as RecordDiff<any, any>,
    ),
  )
}

function removeReservedProps<A extends {}>(a: A) {
  return pipeline<A, Record<string, any>>(
    a,
    dissoc('aria'),
    dissoc('attrs'),
    dissoc('data'),
    dissoc('on'),
    dissoc('key'),
    dissoc('ref'),
  )
}
