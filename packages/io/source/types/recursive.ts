import { Type } from './Type'

export interface RecursiveType<T extends Type> extends Type<Type.Of<T>, Type.Encoding<T>> {}

export const lazy = <T extends Type>(f: () => T): RecursiveType<T> => recursive<T>(f)

export const recursive = <T extends Type = Type>(f: (type: NoInfer<T>) => T): RecursiveType<T> => {
  let _type: T | null = null

  const type = {
    get name() {
      return getType().name
    },
    is: (u) => getType().is(u),
    decode: (i) => getType().decode(i),
    encode: (a) => getType().encode(a),
  } as T

  function getType(): T {
    if (!_type) {
      _type = f(type)
    }

    return _type!
  }

  return type
}

type NoInfer<T> = [T][T extends any ? 0 : never]
