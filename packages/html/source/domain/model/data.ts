import { Effects } from '@typed/effects'
import { StrMapDiff } from './StrMap'
import { ElementTypes, EnvOf } from './VNode'

export type UpdateDataList<E> = <A extends ElementTypes>(
  vNode: A,
  diff: StrMapDiff<string>,
) => Effects<E & EnvOf<A>, A>
