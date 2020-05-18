/**
 * Places all the values of a ConsList into an intersection at list n-depth the length of A.
 */
export type Flatten<A, S> = A extends [infer H]
  ? S & H
  : A extends [infer H, infer T]
  ? [Flatten<T, S & H>]
  : S

/**
 * Extracts the intersection from within the output of Flatten<A, S>
 */
export type UnNest<FlattenedConsList, Fallback = unknown> = FlattenedConsList extends any[]
  ? {
      [K in keyof FlattenedConsList]: FlattenedConsList[K] extends [infer TT]
        ? TT extends any[]
          ? UnNest<TT>
          : TT
        : FlattenedConsList[K]
    }[number]
  : Fallback
