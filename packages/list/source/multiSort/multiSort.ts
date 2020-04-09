import { Arity1, curry, id } from '@typed/lambda'
import { ascend } from '../ascend'
import { chain } from '../chain'
import { descend } from '../descend'
import { groupBy } from '../groupBy'

/**
 * Order a list into groups and subgroups
 * @param sortFns :: [(a -> PropertyKey)]
 * @param list :: [a]
 * @returns :: [a]
 */
export const multiSort: {
  <A>(sortFns: Arity1<A, PropertyKey>[], list: ReadonlyArray<A>): A[]
  <A>(sortFns: Arity1<A, PropertyKey>[]): (list: ReadonlyArray<A>) => A[]
} = curry(function multiSort<A>(sortFns: Arity1<A, PropertyKey>[], list: ReadonlyArray<A>): A[] {
  return multiSortWithOrder(SortOrder.Ascending, sortFns, list)
})

export const enum SortOrder {
  Ascending,
  Descending,
}

export const multiSortWithOrder: {
  <A>(order: SortOrder, sortFns: Arity1<A, PropertyKey>[], list: ReadonlyArray<A>): A[]
  <A>(order: SortOrder, sortFns: Arity1<A, PropertyKey>[]): (list: ReadonlyArray<A>) => A[]
  (order: SortOrder): {
    <A>(sortFns: Arity1<A, PropertyKey>[], list: ReadonlyArray<A>): A[]
    <A>(sortFns: Arity1<A, PropertyKey>[]): (list: ReadonlyArray<A>) => A[]
  }
} = curry(function multiSortWithOrder<A>(
  order: SortOrder,
  sortFns: Arity1<A, PropertyKey>[],
  list: ReadonlyArray<A>,
): A[] {
  if (sortFns.length === 0 || list.length === 0) {
    return list.slice()
  }

  const sort = order === SortOrder.Ascending ? ascend : descend
  const initialObject = groupBy(sortFns[0], list)
  const initialKeys = Object.keys(initialObject).sort(sort(id))
  const innerSortFns = sortFns.slice(1)
  const result = initialKeys.reduce((acc, key) => {
    acc[key] = multiSortWithOrder(order, innerSortFns, initialObject[key])

    return acc
  }, {} as Record<string, A[]>)

  return chain((x) => result[x], initialKeys)
})
