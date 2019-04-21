export const JUST = '@typed/Just' as const
export type JUST = typeof JUST
/**
 * A JSON-serializable Just data-structure
 * @name Just
 * @type
 */
export interface Just<A> {
  readonly [JUST]: A
}

export namespace Just {
  /**
   * Creates a Just given a value.
   * @name Just.of<A>(value: A): Just<A>
   */
  export function of<A>(value: A): Just<A> {
    return { [JUST]: value }
  }
}
