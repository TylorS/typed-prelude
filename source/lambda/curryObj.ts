import { Arity1 } from './types'

const ALL_PROPERTIES_NOT_FOUND = new Error('All Properties Not Found')
const defaultObject: {} = Object.freeze(Object.create(null))

/**
 * Uses ES2015 Proxy to partially apply a function that takes in an options object
 * @param f :: Object a => (a -> b)
 */
export const curryObj = <A extends {}, B>(f: Arity1<A, B>): CurryObj<A, B> =>
  _curryObj(f, defaultObject) as CurryObj<A, B>

export type CurryObj<A extends {}, B> = <C extends Partial<A>>(
  c: C,
) => C extends A ? B : CurryObj<Required<{ [K in Exclude<keyof A, keyof C>]: A[K] }>, B>

function _curryObj<A extends {}, B, C extends Partial<A>>(f: Arity1<A, B>, previousObj: C) {
  return <D extends Partial<{ [K in Exclude<keyof A, keyof D>]: A[K] }>>(x: D) => {
    const obj = proxyObject<A>(Object.assign({}, previousObj, x))

    try {
      return f(obj)
    } catch (error) {
      if (error !== ALL_PROPERTIES_NOT_FOUND) {
        throw error
      }

      return _curryObj(f, obj)
    }
  }
}

function proxyObject<A extends {}>(a: A | Partial<A>): A {
  return new Proxy(a, {
    get(target: Partial<A>, key: keyof A) {
      if (!target.hasOwnProperty(key)) {
        throw ALL_PROPERTIES_NOT_FOUND
      }

      return target[key]
    },
  }) as A
}
