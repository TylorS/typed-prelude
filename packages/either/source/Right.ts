export const RIGHT = '@typed/Right' as const
export type RIGHT = typeof RIGHT

/**
 * A JSON-serializable Right data-structure.
 * @name Right
 * @type
 */
export interface Right<A> {
  readonly [RIGHT]: A
}

export namespace Right {
  /**
   * Creates a Right
   * @name Right.of<A>(value: A): Right<A>
   * @param {A}
   * @return {Right<A>}
   */
  export function of<A>(value: A): Right<A> {
    return { [RIGHT]: value }
  }
}

/**
 * Extracts the value contained in a Right.
 * @name fromRight<A>(right: Right<A>): A
 * @param right
 */
export function fromRight<A>(right: Right<A>): A {
  return right[RIGHT]
}
