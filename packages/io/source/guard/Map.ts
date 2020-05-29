import { isMap } from '@typed/logic'
import { array } from './Array'
import { Guard, TypeOf } from './Guard'
import { refinement } from './refinement'

export const Map: Guard<ReadonlyMap<unknown, unknown>> = Guard.is(isMap)

export const map = <K extends Guard, V extends Guard>(
  key: K,
  value: V,
): Guard<ReadonlyMap<TypeOf<K>, TypeOf<V>>> => {
  const keys = array(key)
  const values = array(value)

  return refinement(
    Map,
    (m): m is ReadonlyMap<TypeOf<K>, TypeOf<V>> =>
      keys.is(Array.from(m.keys())) && values.is(Array.from(m.values())),
  )
}
