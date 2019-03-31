import { noOp } from '@typed/lambda'

export interface Disposable {
  readonly dispose: () => void
}

export namespace Disposable {
  export const None = { dispose: noOp }

  export const lazy = (fn: () => Disposable): Disposable => ({ dispose: () => fn().dispose() })
}
