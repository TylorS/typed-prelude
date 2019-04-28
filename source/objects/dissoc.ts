import { DropKeys } from '@typed/common'
import { curry } from '@typed/lambda'
import { clone } from './clone'

/**
 * Disassociate a key from an object
 */
export const dissoc = curry(_dissoc) as {
  <K extends PropertyKey, A extends Record<K, any>>(key: K, obj: A): DropKeys<A, K>
  <K extends PropertyKey>(key: K): <A extends Record<K, any>>(obj: A) => DropKeys<A, K>
}

function _dissoc<K extends PropertyKey, A extends Record<K, any>>(key: K, obj: A): DropKeys<A, K> {
  const cloned = clone(obj)

  delete cloned[key]

  return (cloned as any) as DropKeys<A, K>
}
