export type DropKeys<A, Keys extends PropertyKey> = Exclude<keyof A, Keys> extends never
  ? {}
  : { [K in Exclude<keyof A, Keys>]: A[K] }
