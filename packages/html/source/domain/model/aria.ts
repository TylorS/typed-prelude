import { Effects } from '@typed/effects'
import { StrMap, StrMapDiff } from './StrMap'
import { ElementTypes, EnvOf } from './VNode'

declare module './VNode' {
  export interface VNodeProps<E, A> {
    readonly aria?: StrMap<string>
  }
}

export type UpdateAriaAttributes<E> = <A extends ElementTypes>(
  vNode: A,
  diff: StrMapDiff<string>,
) => Effects<E & EnvOf<A>, A>
