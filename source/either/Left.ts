export const LEFT = '@typed/Left' as const
export type LEFT = typeof LEFT

/**
 * A JSON-serializable Left<A> data-structure.
 * @name Left
 * @type
 */
export interface Left<A> {
  readonly [LEFT]: A
}

export namespace Left {
  /**
   * Create a Left<A>
   * @name Left.of<A>(value: A): Left<A>
   */
  export function of<A>(value: A): Left<A> {
    return { [LEFT]: value }
  }
}

/**
 * Extracts the value contained in a Left.
 * @name fromLeft<A>(left: Left<A>): A
 */
export function fromLeft<A>(left: Left<A>): A {
  return left[LEFT]
}
