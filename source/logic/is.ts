export function isUndefined(x: any): x is undefined {
  return x === undefined
}

export function isNotUndefined<A>(x: A | undefined): x is A {
  return x !== undefined
}

export function isNull(x: any): x is null {
  return x === null
}

export function isArray<A = unknown>(x: any): x is A[] {
  return Array.isArray(x)
}

export function isIterator<A = unknown>(x: any): x is Iterator<A> {
  return x && typeof (x as Iterator<A>).next === 'function'
}

export function isIterable<A = unknown>(x: any): x is Iterable<A> {
  return x && typeof x[Symbol.iterator] === 'function' && isIterator(x[Symbol.iterator]())
}

export function isArrayLike<A = unknown>(x: any): x is ArrayLike<A> {
  if (Array.isArray(x)) {
    return true
  }

  if (!x || typeof x !== 'object' || typeof x === 'string') {
    return false
  }

  if (x.nodeType === 1) {
    return !!x.length
  }

  if (x.length === 0) {
    return true
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  }

  return false
}

export function isMap<A = unknown, B = unknown>(x: any): x is Map<A, B> {
  return (
    x && typeof (x as Map<A, B>).delete === 'function' && typeof (x as Map<A, B>).set === 'function'
  )
}

export function isNumber(x: any): x is number {
  return typeof x === 'number'
}

export function isString(x: any): x is string {
  return typeof x === 'string'
}

export function isObject<A extends object = Object>(x: A | undefined | null | void): x is A
// tslint:disable-next-line:unified-signatures
export function isObject<A extends object = Object>(x: any): x is A

export function isObject<A extends object = Object>(x: any): x is A {
  return x && typeof x === 'object'
}

export function isPromiseLike<A = any>(x: any): x is PromiseLike<A> {
  return x && typeof x.then === 'function'
}

export function isSet<A = any>(x: any): x is Set<A> {
  return x && typeof (x as Set<A>).delete === 'function' && typeof (x as Set<A>).add === 'function'
}
