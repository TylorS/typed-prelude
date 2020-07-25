import { Arity1 } from '@typed/lambda'
import { Env } from './Env'
import { Resume } from './Resume'

export function ap<A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C> {
  return (c) => Resume.chain(([f, v]) => Resume.of(f(v)), Resume.combine(fn(c), value(c)))
}

export function apSeq<A, B, C, D>(fn: Env<A, Arity1<B, C>>, value: Env<D, B>): Env<A & D, C> {
  return (c) => Resume.chain((f) => Resume.chain((a) => Resume.of(f(a)), value(c)), fn(c))
}
