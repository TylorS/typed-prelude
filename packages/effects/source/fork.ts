import { Disposable } from '@typed/disposable'
import { Resume } from '@typed/env'
import { Capabilities, Effects, Return } from './Effect'
import { fail } from './fail'
import { Fail } from './Failure'
import { Fiber, FiberState } from './Fiber'
import { runEffects } from './runEffects'

export type Fork = {
  readonly fork: <A extends Effects<any, any>>(
    effect: A,
    c: Capabilities<A>,
  ) => Resume<Fiber<Return<A>>>
}

export const Fork = {
  fork: <A, B>(effect: Effects<A, B>, c: Capabilities<typeof effect>) => {
    const disposable = Disposable.lazy()

    let resolve: (value: B) => void
    let reject: (error: Error) => void

    // tslint:disable-next-line:variable-name
    const promise = new Promise<B>((_resolve, _reject) => {
      resolve = _resolve
      reject = _reject
    })

    const info = {
      state: FiberState.Running,
      promise,
    } as const

    const fiber: Fiber<B> = {
      info,
      ...disposable,
    }

    function* tryRunEffect() {
      try {
        const value = yield* effect
        fiber.info = { state: FiberState.Returned, value }

        resolve(value)
      } catch (error) {
        fiber.info = { state: FiberState.Error, error }

        reject(error)

        yield* fail(error)
      }
    }

    disposable.addDisposable(runEffects(tryRunEffect(), c))

    return Resume.of(fiber)
  },
}

export function* fork<A extends Effects<any, any>>(
  effect: A,
): Effects<Capabilities<A> & Fork & Fail<Error>, Fiber<Return<A>>> {
  return yield (c: Capabilities<A> & Fork) => c.fork(effect, c)
}
