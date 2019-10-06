import {
  CreateHookContext,
  createUseMemo,
  createUseState,
  InitialValue,
  withCreateHook,
} from '@typed/hooks'
import { ArgsOf, Arity1, ComparableValues, id } from '@typed/lambda'
import { ascend, descend, sort } from '@typed/list'

export type UseSortOptions<A> = {
  readonly by?: (value: A) => ComparableValues
  readonly order?: InitialValue<SortOrder>
}

export const enum SortOrder {
  Ascending,
  Descending,
}

export function createUseSort<A>(
  context: CreateHookContext,
  list: ReadonlyArray<A>,
  options: UseSortOptions<A> = {},
) {
  const createUseSortHook = withCreateHook(
    createHook => [createHook(createUseState), createHook(createUseMemo)] as const,
    ([useState, useMemo], list: ReadonlyArray<A>, options: UseSortOptions<A> = {}) => {
      const [sortBy, setSortBy] = useState<Arity1<A, ComparableValues>>(
        options.by || (id as Arity1<A, ComparableValues>),
      )
      const [sortOrder, setSortOrder] = useState<SortOrder>(options.order || SortOrder.Ascending)
      const sortListArgs = [list, sortBy, sortOrder] as ArgsOf<typeof sortList>
      const sortedList = useMemo(sortList, sortListArgs) as ReadonlyArray<A>

      return [sortedList, setSortBy, setSortOrder] as const
    },
  )

  return createUseSortHook(context, list, options)
}

function sortList<A>(
  list: ReadonlyArray<A>,
  by: Arity1<A, ComparableValues>,
  order: SortOrder,
): ReadonlyArray<A> {
  return sort(order === SortOrder.Ascending ? ascend(by) : descend(by), list)
}
