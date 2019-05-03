import { Disposable } from '@typed/disposable'
import { clone } from '@typed/objects'
import { createVirtualClock, createVirtualTimer, VirtualTimer } from '@typed/timer'
import { Pure, runPure } from './Env'

export type TestEnv<A> = {
  readonly timer: VirtualTimer
  readonly recordEvents: (pure: Pure<A>) => Disposable
  readonly getAllEvents: () => ReadonlyArray<A>
  readonly getEvents: (pure: Pure<A>) => ReadonlyArray<A>
}

/**
 * Create a helpful environment for testing Env computations.
 */
export function createTestEnv<A>(startingTime: number = 0): TestEnv<A> {
  const timer = createVirtualTimer(createVirtualClock(startingTime))
  const eventMap = new Map<Pure<A>, A[]>()

  function recordEvents(pure: Pure<A>): Disposable {
    return runPure(a => appendToMap(pure, a, eventMap), pure)
  }

  function getAllEvents() {
    const events: A[] = []

    for (const values of Array.from(eventMap.values())) {
      events.push(...values)
    }

    return clone(events)
  }

  function getEvents(pure: Pure<A>) {
    return clone(eventMap.get(pure) || [])
  }

  const testEnv: TestEnv<A> = {
    timer,
    recordEvents,
    getAllEvents,
    getEvents,
  }

  return testEnv
}

function appendToMap<A>(key: Pure<A>, value: A, map: Map<Pure<A>, A[]>) {
  const values = map.get(key) || []

  values.push(value)
  map.set(key, values)
}
