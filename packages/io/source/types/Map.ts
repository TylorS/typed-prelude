import { Effect, TypeOf } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { isMap } from '@typed/logic'
import { Any, Type } from '../Type'
import { array } from './Array'

export type UnknownMapType<E> = Type<'UnknownMap', E, ReadonlyMap<unknown, unknown>>
export const Map: UnknownMapType<unknown> = {
  name: 'UnknownMap',
  is: isMap,
  *decode(i) {
    if (isMap(i)) {
      return Right.of(i)
    }

    return Left.of([{ message: `Expected 'ReadonlyMap<unknown, unknown>'` }])
  },
  encode: Effect.of,
}

export type MapType<E, Name extends string, K, V> = Type<Name, E, ReadonlyMap<K, V>>

export function map<K extends Any, V extends Any, Name extends string = 'Map'>(
  key: K,
  value: V,
  name: Name = 'Map' as Name,
): MapType<unknown, Name, TypeOf<K>, TypeOf<V>> {
  const keysType = array(key)
  const valuesType = array(value)
  const isMap = (u: unknown): u is ReadonlyMap<TypeOf<K>, TypeOf<V>> =>
    Map.is(u) && keysType.is(Array.from(u.keys())) && valuesType.is(Array.from(u.values()))

  return {
    name,
    is: isMap,
    *decode(i) {
      if (isMap(i)) {
        return Right.of(i)
      }

      return Left.of([{ message: `Expected 'ReadonlyMap<${key.name}, ${value.name}>'` }])
    },
    encode: Effect.of,
  }
}
