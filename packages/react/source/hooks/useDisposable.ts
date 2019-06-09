import { Disposable, dispose } from '@typed/disposable'
import * as React from 'react'

export function useDisposable(fn: () => Disposable, deps?: ReadonlyArray<any>): void {
  return React.useEffect(() => {
    const disposable = fn()

    return () => dispose(disposable)
  }, deps)
}
