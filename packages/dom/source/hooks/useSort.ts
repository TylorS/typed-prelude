import { Pure } from '@typed/env'
import { ComparisonNumbers, Fn } from '@typed/lambda'
import { sort } from '@typed/list'
import { useCallback } from '../tagged'
import { usePureState } from './usePureState'

export function useSort<A>({ list, initialSort }: UseSortOptions<A>): UseSort<A> {
  const [sortedList, setSortedList] = usePureState<ReadonlyArray<A>>(() =>
    initialSort ? sort(initialSort, list) : list,
  )
  const changeSort = useCallback((sortFn: SortFn<A>) => setSortedList(sort(sortFn)), [list])

  return [sortedList, changeSort]
}

export type UseSortOptions<A> = {
  readonly list: ReadonlyArray<A>
  readonly initialSort?: SortFn<A>
}

export type SortFn<A> = Fn<[A, A], ComparisonNumbers>

export type UseSort<A> = [ReadonlyArray<A>, (sort: SortFn<A>) => Pure<ReadonlyArray<A>>]
