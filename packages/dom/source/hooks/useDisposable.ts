import { Disposable, dispose } from '@typed/disposable'
import { useEffect } from '../tagged'

export function useDisposable(fn: () => Disposable, deps?: ReadonlyArray<any>): void {
  return useEffect(() => {
    const disposable = fn()

    return () => dispose(disposable)
  }, deps)
}
