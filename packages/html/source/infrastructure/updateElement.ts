import { combine } from '@typed/effects'
import { pipeline } from '@typed/lambda'
import { dissoc } from '@typed/objects'
import { diffRecordMap, ElementTypes, RecordDiff } from '../domain'
import { addElements } from './addElements'
import { getNodeOrThrow } from './getNodeOrThrow'
import { removeElements } from './removeElements'
import { updateAriaAttributes } from './updateAriaAttributes'
import { updateAttributes } from './updateAttributes'
import { updateChildren } from './updateChildren'
import { updateDataList } from './updateDataList'
import { updateEventHandlers } from './updateEventHandlers'
import { updateProperties } from './updateProperties'

const EMPTY: any = {}

export function* updateElement<A extends ElementTypes, B extends ElementTypes>(
  elementVNode: A,
  vNode: B,
) {
  const previousProps = elementVNode.props ?? EMPTY
  const currentProps = vNode.props ?? EMPTY

  yield* combine(
    updateAriaAttributes(
      vNode,
      diffRecordMap(previousProps?.aria ?? EMPTY, currentProps?.aria ?? EMPTY),
    ),
    updateAttributes(
      vNode,
      // TODO :: handle boolean attributes
      diffRecordMap(previousProps?.attrs ?? EMPTY, currentProps?.attrs ?? EMPTY),
    ),
    updateDataList(vNode, diffRecordMap(previousProps?.data ?? EMPTY, currentProps?.data ?? EMPTY)),
    updateEventHandlers(
      vNode,
      diffRecordMap(previousProps?.on ?? EMPTY, currentProps?.on ?? EMPTY) as RecordDiff<any, any>,
    ),
    updateProperties(
      vNode,
      diffRecordMap(
        removeReservedProps(previousProps),
        removeReservedProps(currentProps),
      ) as RecordDiff<any, any>,
    ),
    patchChildren(elementVNode, vNode),
  )
}

function* patchChildren<A extends ElementTypes, B extends ElementTypes>(elementVNode: A, vNode: B) {
  const node = yield* getNodeOrThrow(vNode)
  const { children: currentChildren } = vNode
  const { children: previousChildren } = elementVNode
  const { length: numberOfPreviousChildren } = previousChildren
  const { length: numberOfCurrentChildren } = currentChildren
  const addedElements = numberOfCurrentChildren > 0 && numberOfPreviousChildren === 0
  const removedElements = numberOfPreviousChildren > 0 && numberOfCurrentChildren === 0
  const updatedElements =
    numberOfPreviousChildren > 0 &&
    numberOfCurrentChildren > 0 &&
    previousChildren !== currentChildren

  if (addedElements) {
    yield* addElements(node, currentChildren, null)
  } else if (removedElements) {
    yield* removeElements(node, previousChildren)
  } else if (updatedElements) {
    yield* updateChildren(node, previousChildren, currentChildren)
  }
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
