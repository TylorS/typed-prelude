import { withEnv } from '@typed/env'
import { id } from '@typed/lambda'
import { Effect } from './Effect'

export const get = <A>(): Effect<A, A> => Effect.fromEnv<A, A>(withEnv(id))
