import {
  CreateHookContext,
  createUseMemo,
  createUseState,
  InitialValue,
  withCreateHook,
} from '@typed/hooks'
import { always, ArgsOf, Predicate } from '@typed/lambda'
import { append, remove } from '@typed/list'
import { anyPass } from '@typed/logic'

const EMPTY = always([] as any[])

export const createUseFilter = <A>(
  context: CreateHookContext,
  list: readonly A[],
  initialFilters: InitialValue<ReadonlyArray<Predicate<A>>> = EMPTY,
) => {
  const createUseFilterHook = withCreateHook(
    createHook => [createHook(createUseState), createHook(createUseMemo)] as const,
    (
      [useState, useMemo],
      list: readonly A[],
      initial: InitialValue<ReadonlyArray<Predicate<A>>> = EMPTY,
    ) => {
      const [filters, setFilters] = useState<ReadonlyArray<Predicate<A>>>(initial)
      const filterListArgs = [filters, list] as ArgsOf<typeof filterList>
      const filteredList = useMemo(filterList, filterListArgs) as readonly A[]
      const addFilter = useMemo(_ => (filter: Predicate<A>) => setFilters(append(filter)), [
        filters,
      ])
      const removeFilter = useMemo(
        _ => (filter: Predicate<A>) => setFilters(findAndRemoveFilter(filter)),
        [filters],
      )

      return [filteredList, addFilter, removeFilter] as const
    },
  )

  return createUseFilterHook(context, list, initialFilters)
}

function filterList<A>(filters: ReadonlyArray<Predicate<A>>, list: readonly A[]): readonly A[] {
  const filteredList: A[] = []

  for (const value of list) {
    if (anyPass(filters, value)) {
      filteredList.push(value)
    }
  }

  return filteredList
}

function findAndRemoveFilter<A>(filter: Predicate<A>) {
  return (filters: ReadonlyArray<Predicate<A>>) => {
    const index = filters.findIndex(x => x === filter)

    return index > -1 ? remove(index, 1, filters) : filters
  }
}
