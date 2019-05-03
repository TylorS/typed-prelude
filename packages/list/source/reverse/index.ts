/**
 * Reverse the order of a list's value.
 * @param list :: [a]
 * @returns :: [a]
 */
export const reverse = <A>(list: ReadonlyArray<A>) => list.slice().reverse()
