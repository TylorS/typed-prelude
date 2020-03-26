import { Disposable } from '@typed/disposable'
import { createDeferred } from '@typed/promises'
import { Fiber, FiberInfo, FiberState } from './Fiber'

// Creates a fiber that automatically reacts to the mutation of its current info
// Makes use of ES2015 Proxy, if required the available Proxy polyfills _should_ work for this use case.
export function createFiber<A>(): Fiber<A> {
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
