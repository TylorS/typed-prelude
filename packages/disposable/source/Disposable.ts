import { Arity1, noOp } from '@typed/lambda'

/**
 * Generic type for cleaning up resources
 */
export interface Disposable {
  readonly dispose: () => void
}

export interface LazyDisposable extends Disposable {
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
  export const lazy = () => {
    let isDisposed: boolean = false
    const disposables: Disposable[] = []
    const removeDisposable = (disposable: Disposable) => {
      const index = disposables.findIndex(d => d === disposable)

      if (index > -1) {
        disposables.splice(index, 1)
      }
    }

    return {
      addDisposable(disposable: Disposable) {
        if (isDisposed) {
          dispose(disposable)
        } else {
          disposables.push(disposable)
        }

        return {
          dispose: () => removeDisposable(disposable),
        }
      },
      dispose() {
        if (isDisposed) {
          return
        }

        isDisposed = true
        disposables.forEach(dispose)
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
