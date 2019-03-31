export const length = <A extends { readonly length: number }>(list: A): number => list.length
