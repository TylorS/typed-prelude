import { Disposable, dispose } from './Disposable'

/**
 * Clean up more than one disposable
 * @param disposables :: Disposable[]
 */
export const disposeAll = (disposables: readonly Disposable[]): Disposable => ({
  dispose: () => disposables.forEach(dispose),
})
