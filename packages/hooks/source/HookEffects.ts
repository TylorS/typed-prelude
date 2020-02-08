import { Effects } from '@typed/effects'
import { Resources } from '@typed/env'
import { WithHookEnvs } from './WithHookEnvs'

export type HookEffects<A, B> = Effects<Resources<WithHookEnvs<A>>, B>
