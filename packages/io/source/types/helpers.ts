import { Effect } from '@typed/effects'
import { any } from '@typed/logic'
import { Any } from './Type'

export const shouldUseIdentity = (types: readonly Any[]): boolean =>
  any((s) => s.encode !== Effect.of, types)

export type Props = Readonly<Record<PropertyKey, Any>>
