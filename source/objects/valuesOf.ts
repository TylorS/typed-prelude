import { keysOf } from './keysOf'

export const valuesOf = <A extends Record<any, any>>(obj: A) => {
  const keys = keysOf(obj)

  return keys.map(x => obj[x])
}
