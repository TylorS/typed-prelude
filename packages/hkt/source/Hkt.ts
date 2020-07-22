/**
 * Union of all type names as defined in Hkts & HktValues
 */
export type Types = keyof Hkts<ReadonlyArray<any>> & keyof HktValues<any>

/**
 * Helper for type-classes to use a placeholder type-params
 */
export type PossibleValues = [any?, any?, any?, any?, any?]

/**
 * Helper for creating types by use of their Type name, and a tuple of values to use.
 *
 * @example
 * Type<'Either', [Error, number]> === Either<Error, number>
 */
export type Type<
  T extends Types = Types,
  Values extends ReadonlyArray<any> = ReadonlyArray<any>
> = Hkts<Values>[T]

/**
 *  Lookup the name of Hkt by Type
 * @example
 * TypeToName<Either<any, any>> === 'Either'
 */
export type TypeToName<A> = {
  [T in Types]: Type<T, ReadonlyArray<any>> extends A ? T : never
}[Types]

/**
 * Retrieve the values of an Hkt as a Tuple.
 * @example
 * ValuesOf<Either<A, B>> === [A, B]
 */
export type ValuesOf<A extends Type<Types, ReadonlyArray<any>>> = HktValues<A>[TypeToName<A>]

/* TO BE EXTENDED IN IMPLEMENTATIONS */

/**
 * Type-level map, used to apply values to specific data structures
 */
// tslint:disable-next-line:no-empty-interface
export interface Hkts<Values extends ReadonlyArray<any>> {}

/**
 * Type-level map, used to extract values from instances to apply transformations or just
 * to retrieve the information.
 */
// tslint:disable-next-line:no-empty-interface
export interface HktValues<T> extends Record<PropertyKey, PossibleValues> {}
