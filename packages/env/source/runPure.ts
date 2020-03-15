import { Disposable } from '@typed/disposable'
import { curry } from '@typed/lambda'
import { Pure } from './Env'
import { runEnv } from './runEnv'

/**
 * Runs a Pure Env with the given callback
 * @param f :: (a -> Disposable) Callback for pure Value
 * @param pure :: Pure<A>  Pure to run
 * @returns :: Disposable
 */
export const runPure: {
  <A>(f: (value: A) => Disposable, pure: Pure<A>): Disposable
  <A>(f: (value: A) => Disposable): (pure: Pure<A>) => Disposable
} = curry(function runPure<A>(f: (value: A) => Disposable, pure: Pure<A>): Disposable {
  return runEnv(f, {}, pure)
})
