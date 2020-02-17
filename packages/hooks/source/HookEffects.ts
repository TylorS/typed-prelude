import { Effect } from '@typed/effects'
import { WithHookEnvs } from './WithHookEnvs'

export type HookEffects<A, B> = Effect<WithHookEnvs<A>, B, any>
