/**
 * Create a function that always returns a given value
 * @param value :: a
 * @returns (...* -> a)
 */
export const always = <A>(value: A) => (..._: any[]): A => value
