export const keysOf = <A extends PropertyKey>(obj: Record<A, any>): A[] => Object.keys(obj) as A[]
