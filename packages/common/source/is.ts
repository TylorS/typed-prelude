export function isMap<A = unknown, B = unknown>(x: any): x is Map<A, B> {
  if (!x) {
    return false
  }

  const map = x as Map<A, B>

  return (
    isFunction(map.set) &&
    isFunction(map.get) &&
    isFunction(map.has) &&
    isFunction(map.delete) &&
    isFunction(map.clear) &&
    isFunction(map[Symbol.iterator])
  )
}

export function isSet<A = any>(x: any): x is Set<A> {
  if (!x) {
    return false
  }

  const set = x as Set<A>

  return (
    isFunction(set.add) &&
    isFunction(set.clear) &&
    isFunction(set.delete) &&
    isFunction(set.has) &&
    isFunction(set[Symbol.iterator])
  )
}

export function isFunction(x: any): x is Function {
  return typeof x === 'function'
}
