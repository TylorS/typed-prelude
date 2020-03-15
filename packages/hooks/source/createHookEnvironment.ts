import { Disposable } from '@typed/disposable'
import { Effect, Effects, PureEffect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1 } from '@typed/lambda'
import { equals } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { uuid4 } from '@typed/uuid'
import { Channel } from './Channel'
import { HookEnvironment, InitialState, Ref, UseChannel, UseRef, UseState } from './HookEnvironment'
import { HooksManager } from './HooksManager'

const toNull = InitialState.of(null)

export function createHookEnvironment(manager: HooksManager): HookEnvironment {
  const id = uuid4(manager.randomUuidSeed())
  const { nextId, resetId } = createIdGenerator()
  const hookStates = new Map<number, any>()
  const channelUpdates = new WeakMap<Channel<any, any>, UseChannel<any, any>>()
  const disposable = Disposable.lazy()
  const hookEnvironment: HookEnvironment = {
    id,
    useState,
    useRef,
    useChannel,
    resetId,
    get updated() {
      return manager.hasBeenUpdated(hookEnvironment)
    },
    clearUpdated: () => manager.setUpdated(hookEnvironment, false),
    ...disposable,
  }

  return hookEnvironment

  function* useState<E, A>(initial: InitialState<E, A>): Effect<E, UseState<A>> {
    const id = nextId()

    if (!hookStates.has(id)) {
      hookStates.set(id, yield* initial())
    }

    const getState = () => Effect.fromEnv(Pure.fromIO((): A => hookStates.get(id)!))
    function* setState(update: Arity1<A, A>): PureEffect<A> {
      const current = yield* getState()
      const updated = update(current)

      if (!equals(current, updated)) {
        hookStates.set(id, updated)

        yield* manager.setUpdated(hookEnvironment, true)
      }

      return yield* getState()
    }

    return [getState, setState] as const
  }

  function* useRef<E, A>(
    initial: InitialState<E, A | null | undefined | void> = toNull as InitialState<
      E,
      A | null | undefined | void
    >,
  ): Effect<E, UseRef<A>> {
    const id = nextId()

    if (!hookStates.has(id)) {
      hookStates.set(id, { current: Maybe.of(yield* initial()) })
    }

    const ref: Ref<A> = hookStates.get(id)!

    function setState(current: A | undefined | void | null) {
      ref.current = Maybe.of(current)
    }

    return [ref, setState] as const
  }

  function* useChannel<E, A>(
    channel: Channel<E, A>,
    initial?: InitialState<E, A>,
  ): Effects<E, UseChannel<E, A>> {
    // Only create updateChannel once
    if (channelUpdates.has(channel)) {
      return channelUpdates.get(channel)!
    }

    const getValue = () => manager.consumeChannel(channel, hookEnvironment)
    const provideValue = yield* manager.updateChannel(channel, hookEnvironment, initial)

    function* updateChannel(update: Arity1<A, A>): Effect<E, A> {
      return yield* provideValue(update(yield* getValue()))
    }

    const useChannel: UseChannel<E, A> = [getValue, updateChannel]

    channelUpdates.set(channel, useChannel)

    return useChannel
  }
}

function createIdGenerator() {
  let id = 0
  const nextId = () => ++id
  const resetId = () =>
    Effect.fromEnv(
      Pure.fromIO(() => {
        id = 0
      }),
    )

  return { nextId, resetId } as const
}
