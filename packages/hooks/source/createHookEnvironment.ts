import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { equals } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { uuid4 } from '@typed/uuid'
import { Channel } from './Channel'
import { HookEnvironment, InitialState, Ref, UseState } from './HookEnvironment'
import { HooksManager } from './HooksManager'

export function createHookEnvironment(manager: HooksManager): HookEnvironment {
  const id = uuid4(manager.uuidEnv.randomUuidSeed())
  const { nextId, resetId } = createIdGenerator()
  const hookStates = new Map<number, any>()
  const hookEnvironment: HookEnvironment = {
    id,
    useState,
    useRef,
    useChannel,
    provideChannel,
    resetId: Effect.fromEnv(Pure.fromIO(resetId)),
    get updated() {
      return manager.hasBeenUpdated(hookEnvironment)
    },
    clearUpdated: () => manager.setUpdated(hookEnvironment, false),
  }

  return hookEnvironment

  function* useState<A>(initial: InitialState<A>): Generator<Pure, UseState<A>, void> {
    const id = nextId()

    if (!hookStates.has(id)) {
      hookStates.set(id, getInitialValue(initial))
    }

    const getState = (): A => hookStates.get(id)!
    function* setState(update: Arity1<A, A>): Generator<Pure, A, any> {
      const [current, updated] = yield* Effect.fromEnv(
        Pure.fromIO(() => {
          const current = getState()
          const updated = update(current)

          return [current, updated] as const
        }),
      )

      if (!equals(current, updated)) {
        hookStates.set(id, updated)

        yield* manager.setUpdated(hookEnvironment, true)
      }

      return getState()
    }

    return [getState, setState] as const
  }

  function* useRef<A>(initial?: InitialState<A>) {
    const id = nextId()

    if (!hookStates.has(id)) {
      hookStates.set(id, { current: Maybe.of(getInitialValue(initial)) })
    }

    const ref: Ref<A> = hookStates.get(id)!

    function setState(current: A | undefined | void | null) {
      ref.current = Maybe.of(current)
    }

    return [ref, setState] as const
  }

  function* useChannel<A>(channel: Channel<A>) {
    return yield* manager.consumeChannel(channel, hookEnvironment)
  }

  function* provideChannel<A>(channel: Channel<A>, initial: InitialState<A>) {
    return yield* manager.updateChannel(channel, getInitialValue(initial), hookEnvironment)
  }
}

function getInitialValue<A>(initial: InitialState<A>) {
  return typeof initial === 'function' ? (initial as IO<A>)() : initial
}

function createIdGenerator() {
  let id = 0
  const nextId = () => ++id
  const resetId = () => {
    id = 0
  }

  return { nextId, resetId } as const
}
