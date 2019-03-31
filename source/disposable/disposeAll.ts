import { Disposable } from './Disposable'
import { dispose } from './dispose'

export const disposeAll = (disposables: Disposable[]): Disposable => ({
  dispose: () => disposables.forEach(dispose),
})
