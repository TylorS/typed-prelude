import { Arity1, pipe } from '@typed/lambda'
import { chain } from './chain'
import { Env, Pure } from './Env'

export function map<E, A, B>(fn: Arity1<A, B>, env: Env<E, A>): Env<E, B> {
  return chain(pipe(fn, Pure.of), env)
}
