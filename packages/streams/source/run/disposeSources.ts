import { Disposable } from '@most/types'
import { Sources } from './types'

export function disposeSources<A extends Sources>(sources: A): void {
  Object.keys(sources).forEach(key => {
    const source = sources[key as keyof A]

    if (isDisposable(source)) {
      source.dispose()
    }
  })
}

function isDisposable(x: any): x is Disposable {
  return x && typeof x.dispose === 'function'
}
