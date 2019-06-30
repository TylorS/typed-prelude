import { Pure } from '@typed/env'
import { usePureState } from './usePureState'

const withMutations = <A, B>(fn: (map: Map<A, B>) => void) => (map: ReadonlyMap<A, B>) => {
  const updatedMap = new Map(map)

  fn(updatedMap)

  return updatedMap
}

export function useMap<A, B>(
  initialValue: ReadonlyMap<A, B> = new Map(),
): [ReadonlyMap<A, B>, (updateMap: (map: Map<A, B>) => void) => Pure<ReadonlyMap<A, B>>] {
  const [map, setMap] = usePureState(initialValue)
  const updateMap = (fn: (map: Map<A, B>) => void) => setMap(withMutations(fn))

  return [map, updateMap]
}
