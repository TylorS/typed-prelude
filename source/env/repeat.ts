import { curry } from '@typed/lambda'
import { range } from '@typed/list'
import { chain } from './chain'
import { Env } from './Env'

export const repeat = curry(__repeat) as {
  <E, A>(times: number, env: Env<E, A>): Env<E, A>
  (times: number): <E, A>(env: Env<E, A>) => Env<E, A>
}

function __repeat<E, A>(times: number, env: Env<E, A>): Env<E, A> {
  if (times < 1) {
    return env
  }

  return range(1, times).reduce(e => chain(() => env, e), env)
}
