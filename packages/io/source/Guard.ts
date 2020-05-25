import { curry, Is } from '@typed/lambda'

export interface Guard<A> {
  readonly is: Is<A>
}

export const guard = curry(__guard) as {
  <A>(guard: Guard<A>, value: unknown): value is A
  <A>(guard: Guard<A>): Is<A>
}

function __guard<A>(guard: Guard<A>, value: unknown) {
  return guard.is(value)
}
