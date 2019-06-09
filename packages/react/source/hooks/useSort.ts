import { Pure } from '@typed/env'
import { ComparisonNumbers, Fn } from '@typed/lambda'
import { sort } from '@typed/list'
import * as React from 'react'
import { usePureState } from './usePureState'

export function useSort<A>({ list, initialSort }: UseSortOptions<A>): UseSort<A> {
  const [sortedList, setSortedList] = usePureState(() =>
    initialSort ? sort(initialSort, list) : list,
  )
  const changeSort = React.useCallback((sortFn: SortFn<A>) => setSortedList(sort(sortFn)), [list])

  return [sortedList, changeSort]
}

export type UseSortOptions<A> = {
  readonly list: ReadonlyArray<A>
  readonly initialSort?: SortFn<A>
}

export type SortFn<A> = Fn<[A, A], ComparisonNumbers>

export type UseSort<A> = [ReadonlyArray<A>, (sort: SortFn<A>) => Pure<ReadonlyArray<A>>]
