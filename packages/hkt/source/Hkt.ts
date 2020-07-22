// Union of all type names
export type Types = keyof Hkts<ReadonlyArray<any>> & keyof HktValues<any>

// Helper for creating types
export type Type<
  T extends Types = Types,
  Values extends ReadonlyArray<any> = ReadonlyArray<any>
> = Hkts<Values>[T]

// Lookup the name of Hkt by Type
export type TypeToName<A> = {
  [T in Types]: A extends Type<T, ReadonlyArray<any>> ? T : never
}[Types]

// Retrieve the values of an Hkt as a Tuple
export type ValuesOf<A extends Type<Types, ReadonlyArray<any>>> = ReturnType<
  HktValues<A>[TypeToName<A>]
>

/* TO BE EXTENDED IN IMPLEMENTATIONS */

// tslint:disable-next-line:no-empty-interface
export interface Hkts<Values extends ReadonlyArray<any>> {}

// tslint:disable-next-line:no-empty-interface
export interface HktValues<T> extends Record<PropertyKey, () => ReadonlyArray<any>> {}
