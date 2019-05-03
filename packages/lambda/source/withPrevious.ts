import { curry } from './curry'
import { Arity1, Fn } from './types'

const NOTHING = Symbol('nothing')
type NOTHING = typeof NOTHING
type Nothing = { [NOTHING]: true }
type Just<A> = { [NOTHING]: false; value: A }
type Maybe<A> = Just<A> | Nothing

/**
 * Perform an operation with the previous value returned
 * @param withFn :: (a -> *)
 * @param fn: (...* -> a)
 * @returns (...* -> a)
 */
export const withPrevious = curry(function withPrevious<A, Args extends any[]>(
  withFn: Arity1<A, void>,
  fn: Fn<Args, A>,
): Fn<Args, A> {
  let previous: Maybe<A> = { [NOTHING]: true }
  return (...args: Args): A => {
    if (!isNothing(previous)) {
      withFn(previous.value)
    }

    const value = fn(...args)

    previous = { [NOTHING]: false, value }

    return value
  }
}) as {
  <A, Args extends any[]>(withFn: Arity1<A>, fn: Fn<Args, A>): Fn<Args, A>
  <A>(withFn: Arity1<A>): <Args extends any[]>(fn: Fn<Args, A>) => Fn<Args, A>
}

function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return maybe[NOTHING]
}
