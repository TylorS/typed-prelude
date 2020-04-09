import { curry } from '@typed/lambda'
import { Env } from './Env'
import { Resume } from './Resume'

export const chain = curry(__chain) as {
  <A, E1, B, E2>(fn: (value: A) => Env<E1, B>, env: Env<E2, A>): Env<E1 & E2, B>
  <A, E1, B>(fn: (value: A) => Env<E1, B>): <E2>(env: Env<E2, A>) => Env<E1 & E2, B>
}

function __chain<A, E1, B, E2>(fn: (value: A) => Env<E1, B>, env: Env<E2, A>): Env<E1 & E2, B> {
  return (c) => Resume.chain((a) => fn(a)(c), env(c))
}
