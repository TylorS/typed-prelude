export type Compact<A> = { [K in keyof A]: A[K] }
