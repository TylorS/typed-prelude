import { Arity1, IO } from '@typed/lambda'
import { InitialValue, ValueOrUpdate } from './types'

export const getInitialValue = <A>(value: InitialValue<A>) => (isFunction(value) ? value() : value)
export const getUpdatedValue = <A>(value: A, update: ValueOrUpdate<A>) =>
  isFunction(update) ? update(value) : update

export function isFunction<A>(value: InitialValue<A>): value is IO<A>
export function isFunction<A>(value: ValueOrUpdate<A>): value is Arity1<A, A>
export function isFunction(value: InitialValue<any> | ValueOrUpdate<any>): boolean {
  return typeof value === 'function'
}
