import { Effects } from '@typed/effects'
import { StrMap, StrMapDiff } from './StrMap'
import { ElementTypes, EnvOf } from './VNode'

declare module './VNode' {
  export interface VNodeProps<E, A> {
    readonly data?: StrMap<string>
  }
}

export type UpdateDataList<E> = <A extends ElementTypes>(
  vNode: A,
  diff: StrMapDiff<string>,
) => Effects<E & EnvOf<A>, A>
