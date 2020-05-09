import { Effects } from '@typed/effects'
import { StrMapDiff } from './StrMap'
import { ElementTypes, EnvOf } from './VNode'

export type UpdateAttributes<E> = <A extends ElementTypes>(
  vNode: A,
  diff: StrMapDiff<string | undefined>,
) => Effects<E & EnvOf<A>, A>
