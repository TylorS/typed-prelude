import { Effects } from '@typed/effects'
import { RecordDiff } from './StrMap'
import { ElementTypes, EnvOf, EventHandler, EventMapFrom, TagNameOf } from './VNode'

/**
 * Given an ElementVNode, the current events map, and the updated events map -
 * perform the necessary updates to the given ElementVNode and returns that ElementVNode.
 */
export type UpdateEventHandlers<E extends {}> = <A extends ElementTypes>(
  vNode: A,
  diff: RecordDiff<
    keyof EventMapFrom<TagNameOf<A>>,
    EventHandler<
      EnvOf<A>,
      TagNameOf<A>,
      EventMapFrom<TagNameOf<A>>,
      keyof EventMapFrom<TagNameOf<A>>
    >
  >,
) => Effects<E, A>
