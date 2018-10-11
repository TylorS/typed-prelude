import { curry } from './curry'
import { Arity1, Fn } from './types'

const NOTHING = Symbol('nothing')
type NOTHING = typeof NOTHING

export const withPrevious = curry(function withPrevious<A, Args extends any[]>(
  withFn: Arity1<A, void>,
  fn: Fn<Args, A>,
): Fn<Args, A> {
  let previous: A | NOTHING = NOTHING
  return (...args: Args): A => {
    if (previous !== NOTHING) {
      withFn(previous)
    }

    return (previous = fn(...args))
  }
}) as {
  <A, Args extends any[]>(withFn: Arity1<A>, fn: Fn<Args, A>): Fn<Args, A>
  <A>(withFn: Arity1<A>): <Args extends any[]>(fn: Fn<Args, A>) => Fn<Args, A>
}
