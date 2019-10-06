import { Arity1, IO } from '@typed/lambda'
import { InitialValue, ValueOrUpdate } from './types'

export const getInitialValue = <A>(value: InitialValue<A>): A =>
  isFunction(value, 0) ? value() : value
export const getUpdatedValue = <A>(value: A, update: ValueOrUpdate<A>) =>
  isFunction(update, 1) ? update(value) : update

export function isFunction<A>(value: InitialValue<A>, arity: 0): value is IO<A>
export function isFunction<A>(value: ValueOrUpdate<A>, arity: 1): value is Arity1<A, A>
export function isFunction(value: InitialValue<any> | ValueOrUpdate<any>, arity: number): boolean {
  return typeof value === 'function' && value.length === arity
}
