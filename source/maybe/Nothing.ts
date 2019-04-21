export const NOTHING = '@typed/Nothing' as const
export type NOTHING = typeof Nothing
/**
 * The Nothing type, used in place of nulls or undefined.
 * @name Nothing
 * @type
 */

export interface Nothing {
  readonly [NOTHING]: true
}
export const Nothing: Nothing = { [NOTHING]: true }
