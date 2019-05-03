import { always, curry } from '@typed/lambda'
import { Env } from './Env'
import { map } from './map'

/**
 * Map one environment-dependent computation to another
 * @param value :: b
 * @param env :: Env e a
 * @returns :: Env e b
 */
export const mapTo = curry(
  <E, A, B>(value: B, env: Env<E, A>): Env<E, B> => map(always(value), env),
) as {
  <E, A, B>(value: B, env: Env<E, A>): Env<E, B>
  <B>(value: B): <E, A>(env: Env<E, A>) => Env<E, B>
}
