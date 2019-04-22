import { noOp } from '@typed/lambda'

/**
 * Generic type for cleaning up resources
 */
export interface Disposable {
  readonly dispose: () => void
}

export namespace Disposable {
  /**
   * Empty Disposable
   */
  export const None = { dispose: noOp }

  /**
   * Create a disposable that is lazily created
   */
  export const lazy = (fn: () => Disposable): Disposable => ({ dispose: () => fn().dispose() })
}
