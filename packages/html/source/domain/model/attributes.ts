import { Effects } from '@typed/effects'
import { StrMap, StrMapDiff } from './StrMap'
import { ElementTypes, EnvOf } from './VNode'

declare module './VNode' {
  export interface VNodeProps<E, A> {
    readonly attrs?: StrMap<string | undefined>
  }
}

export type UpdateAttributes<E> = <A extends ElementTypes>(
  vNode: A,
  diff: StrMapDiff<string | undefined>,
) => Effects<E & EnvOf<A>, A>
