import { Disposable } from '@typed/disposable'
import { Effects } from '@typed/effects'

/** Represents and ES Module */
export interface TestBundle<E> {
  readonly start: () => Effects<E, Disposable>
}
