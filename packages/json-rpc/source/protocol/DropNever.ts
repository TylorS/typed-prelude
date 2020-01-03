export type DropNever<A> = { readonly [K in DropNeverKeys<A>]: A[K] }

type DropNeverKeys<A> = { readonly [K in keyof A]: A[K] extends never ? never : K }[keyof A]
