import { Env, LazyEnv, ValueEnv } from './Env'

/**
 * Returns true when a value is an Env<A, B>
 * @param x :: any
 */
export function isEnv<A, B>(x: any): x is Env<A, B> {
  return isValueEnv<B>(x) || isLazyEnv<A, B>(x)
}

export function isValueEnv<A>(x: any): x is ValueEnv<A> {
  return x && x.type === 'value' && x.hasOwnProperty('value')
}

export function isLazyEnv<A, B>(x: any): x is LazyEnv<A, B> {
  return x && x.type === 'lazy' && x.hasOwnProperty('runEnv') && x.runEnv.length === 2
}
