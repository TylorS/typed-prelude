import { chain } from './chain'
import { Env } from './Env'

export const repeatForever = <A, B>(env: Env<A, B>): Env<A, B> =>
  chain(() => repeatForever(env), env)
