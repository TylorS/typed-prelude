import { chain, Pure } from '@typed/env'
import { Predicate } from '@typed/lambda'
import { append, filter } from '@typed/list'
import { usePureState } from './usePureState'

export function useFilter<A>({ list, initialFilters = [] }: UseFilterOptions<A>): UseFilter<A> {
  const [allFilters, setAllFilters] = usePureState(() => initialFilters)
  const [filteredList, setFilteredList] = usePureState(() => filterList(initialFilters, list))

  const setFilters = (filters: Filters<A>) =>
    chain(() => setFilteredList(list => filterList(filters, list)), setAllFilters(() => filters))
  const addFilter = (filter: Predicate<A>) => setFilters(append(filter, allFilters))
  const removeFilter = (filter: Predicate<A>) => setFilters(allFilters.filter(x => x !== filter))
  const clearFilters = setFilters([])

  return {
    filteredList,
    setFilters,
    addFilter,
    removeFilter,
    clearFilters,
  }
}

function filterList<A>(filters: Filters<A>, list: ReadonlyArray<A>): ReadonlyArray<A> {
  return filter(x => filters.every(f => f(x)), list)
}

export type UseFilterOptions<A> = {
  readonly list: ReadonlyArray<A>
  readonly initialFilters?: Filters<A>
}

export type Filters<A> = ReadonlyArray<Predicate<A>>

export type UseFilter<A> = {
  readonly filteredList: ReadonlyArray<A>
  readonly setFilters: (filters: Filters<A>) => Pure<ReadonlyArray<A>>
  readonly addFilter: (filter: Predicate<A>) => Pure<ReadonlyArray<A>>
  readonly removeFilter: (filter: Predicate<A>) => Pure<ReadonlyArray<A>>
  readonly clearFilters: Pure<ReadonlyArray<A>>
}
