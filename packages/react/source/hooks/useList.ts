import { Pure } from '@typed/env'
import { usePureState } from './usePureState'

export function useList<A>(defaultValue: ReadonlyArray<A> = []): UseList<A> {
  const [list, setList] = usePureState(defaultValue)
  const updateList = (
    updateList: (state: ReadonlyArray<A>) => ArrayLike<A> | Iterable<A>,
  ): Pure<ReadonlyArray<A>> => setList(state => Array.from(updateList(state)))

  return [list, updateList]
}

export type UseList<A> = readonly [
  ReadonlyArray<A>,
  (fn: (value: ReadonlyArray<A>) => ArrayLike<A> | Iterable<A>) => Pure<ReadonlyArray<A>>
]
