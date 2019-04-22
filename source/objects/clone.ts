import { clone as _clone } from '../common/clone'

/**
 * Make a deep clone of a given value
 * @param value :: a
 * @returns :: a
 */
export const clone = <A>(value: A): A => _clone(value, [], [], true)
