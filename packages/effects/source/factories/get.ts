import { Env, withEnv } from '@typed/env'
import { id } from '@typed/lambda'
import { Effect } from '../Effect'

export const get = <A>(): Effect<Env<A, A>, A> => Effect.fromEnv<A, A>(withEnv<A, A>(id))
