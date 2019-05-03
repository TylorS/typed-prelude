/**
 * Return the length of a list
 * @param list :: [a]
 * @returns number
 */
export const length = <A extends { readonly length: number }>(list: A): number => list.length
