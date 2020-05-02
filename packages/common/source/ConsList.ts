export type Flatten<A, S> = A extends [infer H]
  ? S & H
  : A extends [infer H, infer T]
  ? [Flatten<T, S & H>]
  : S

export type UnNest<T, Fallback = unknown> = T extends any[]
  ? {
      [K in keyof T]: T[K] extends [infer TT] ? (TT extends any[] ? UnNest<TT> : TT) : T[K]
    }[number]
  : Fallback
