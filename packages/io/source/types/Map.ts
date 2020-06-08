import * as G from '../guard'
import { Any, Type } from './Type'

export interface MapType<K extends Type, V extends Type>
  extends Type<ReadonlyMap<Type.Of<K>, Type.Of<V>>> {
  readonly key: K
  readonly value: V
}

export function map<K extends Any, V extends Any>(
  key: K,
  value: V,
  name: string = `ReadonlyMap<${key.name}, ${value.name}>`,
  expected: string = `ReadonlyMap<${key.expected}, ${value.expected}>`,
): MapType<K, V> {
  const type = Type.fromGuard(G.map(key, value), name, expected)

  return {
    ...type,
    key,
    value,
  }
}

export const Map: MapType<Any, Any> = map(Any, Any)
