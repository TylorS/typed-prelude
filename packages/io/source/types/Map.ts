import * as G from '../guard'
import { Mixed, Type } from './Type'

export const Map = Type.fromGuard(G.Map, `ReadonlyMap<unknown, unknown>`)

export type MapType<K, V> = Type<ReadonlyMap<K, V>>

export function map<K extends Mixed, V extends Mixed>(
  key: K,
  value: V,
  name: string = `ReadonlyMap<${key.name}, ${value.name}>`,
  expected: string = `ReadonlyMap<${key.expected}, ${value.expected}>`,
): MapType<Type.Of<K>, Type.Of<V>> {
  return Type.fromGuard(G.map(key, value), name, expected)
}
