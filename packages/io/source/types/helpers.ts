import { Effect } from '@typed/effects'
import { any } from '@typed/logic'
import { Mixed } from './Type'

export const shouldUseIdentity = (types: readonly Mixed[]): boolean =>
  any((s) => s.encode !== Effect.of, types)

export type Props = Readonly<Record<PropertyKey, Mixed>>
