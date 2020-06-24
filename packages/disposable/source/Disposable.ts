import { Arity1, noOp } from '@typed/lambda'

/**
 * Generic type for cleaning up resources
 */
export interface Disposable {
  readonly dispose: () => void
}

export interface LazyDisposable extends Disposable {
  readonly disposed: boolean
  readonly addDisposable: Arity1<Disposable, Disposable>
}

/**
 * Cleanup a disposable
 * @param disposable :: Disposable
 */
export const dispose = (disposable: Disposable) => disposable.dispose()

export namespace Disposable {
  /**
   * Empty Disposable
   */
  export const None = { dispose: noOp }

  /**
   * Create a disposable that is lazily created
   */
  export const lazy = (): LazyDisposable => {
    let isDisposed: boolean = false
    const disposables = new Set<Disposable>()
    const removeDisposable = (disposable: Disposable) => disposables.delete(disposable)

    return {
      get disposed() {
        return isDisposed
      },
      addDisposable(disposable: Disposable) {
        if (disposable === Disposable.None) {
          return disposable
        }

        if (isDisposed) {
          disposable.dispose()

          return Disposable.None
        }

        const dispose = () => removeDisposable(disposable)

        disposables.add(onDisposed(dispose, disposable))

        return {
          dispose,
        }
      },
      dispose() {
        if (isDisposed) {
          return
        }

        isDisposed = true
        disposables.forEach(dispose)
        disposables.clear()
      },
    }
  }
}

// Useful when you have a non-cancellable (like promises) async process you want to be able to short circuit
export const withIsDisposed = (fn: (isDisposed: () => boolean) => void): Disposable => {
  let disposed = false
  const isDisposed = () => disposed

  fn(isDisposed)

  return {
    dispose: () => {
      disposed = true
    },
  }
}

export function onDisposed<A>(fn: (error?: A) => void, disposable: Disposable): Disposable {
  return {
    dispose: () => {
      try {
        disposable.dispose()
        fn()
      } catch (error) {
        fn(error)
      }
    },
  }
}
