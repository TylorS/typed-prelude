// Never meant to be really implemented
declare const HKT: unique symbol
export type HKT = typeof HKT

export type Values = ReadonlyArray<unknown>

export interface Hkts<A extends Values> {}

export type Types = keyof Hkts<Values>

export type Type<T, A> = T extends Types ? (A extends Values ? Hkts<A>[T] : never) : never
