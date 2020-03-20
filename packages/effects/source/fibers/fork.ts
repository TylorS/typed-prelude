import { Disposable } from '@typed/disposable'
import { Resume } from '@typed/env'
import { createDeferred } from '@typed/promises'
import { Capabilities, Effects, Return } from '../Effect'
import { fail } from '../failures'
import { runEffects } from '../run/runEffects'
import { Fiber, FiberCapabilites, FiberFailure, FiberInfo, FiberState } from './Fiber'

export type Fork = {
  readonly fork: <A extends Effects<any, any>>(
    effect: A,
    c: FiberCapabilites<A>,
  ) => Resume<Fiber<Return<A>>>
}

export const Fork = {
  fork: <A extends Effects<any, any>>(effect: A, c: FiberCapabilites<A>) => {
    const fiber = createFiber<Return<A>>()

    function* tryRunEffect() {
      try {
        fiber.info = { state: FiberState.Returned, value: yield* effect }
      } catch (error) {
        fiber.info = { state: FiberState.Error, error }

        yield* fail(FiberFailure, error)
      }
    }

    fiber.addDisposable(runEffects(tryRunEffect(), c))

    return Resume.of(fiber)
  },
}

function createFiber<A>() {
  const disposable = Disposable.lazy()
  const [promise, resolve, reject] = createDeferred<A>()

  const handleFiberInfo = (info: FiberInfo<A>) => {
    if (info.state === FiberState.Error) {
      return reject(info.error)
    }

    if (info.state === FiberState.Returned) {
      return resolve(info.value)
    }
  }

  // Besides observing when info is changed, it also coincidentally makes our fiber actually immutable for it's other fields
  function setFiberKey(target: Fiber<A>, key: keyof Fiber<A>, value: Fiber<A>[keyof Fiber<A>]) {
    if (key === 'info') {
      handleFiberInfo(value as FiberInfo<A>)
      target[key] = value as FiberInfo<A>

      return true
    }

    return false
  }

  const fiber: Fiber<A> = new Proxy(
    {
      info: { state: FiberState.Running, promise },
      ...disposable,
    },
    {
      set: setFiberKey,
    },
  )

  return fiber
}

export function* fork<A extends Effects<any, any>>(
  effect: A,
): Effects<Capabilities<A> & Fork & FiberFailure, Fiber<Return<A>>> {
  return yield (c: FiberCapabilites<A> & Fork) => c.fork(effect, c)
}
