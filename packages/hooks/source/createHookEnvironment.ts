import { Disposable } from '@typed/disposable'
import { Effect, Effects } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1 } from '@typed/lambda'
import { equals, isIterable } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { uuid4 } from '@typed/uuid'
import { Channel } from './Channel'
import { HookEnvironment, InitialState, Ref, UseRef, UseState } from './HookEnvironment'
import { HooksManager } from './HooksManager'

export function createHookEnvironment<E>(manager: HooksManager<E>): HookEnvironment<E> {
  const id = uuid4(manager.uuidEnv.randomUuidSeed())
  const { nextId, resetId } = createIdGenerator()
  const hookStates = new Map<number, any>()
  const channelUpdates = new WeakMap<Channel<E, any>, UseState<any>>()
  const disposable = Disposable.lazy()
  const hookEnvironment: HookEnvironment<E> = {
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

  function* useState<A>(initial: InitialState<A>): Effects<never, UseState<A>> {
    const id = nextId()

    if (!hookStates.has(id)) {
      hookStates.set(id, yield* initial())
    }

    const getState = () => Effect.fromEnv(Pure.fromIO((): A => hookStates.get(id)!))
    function* setState(update: Arity1<A, A>): Generator<Pure, A, any> {
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

  function* useRef<A>(
    initial?: InitialState<A | null | undefined | void>,
  ): Effects<never, UseRef<A>> {
    const id = nextId()

    if (!hookStates.has(id)) {
      hookStates.set(id, { current: Maybe.of(isIterable(initial) ? yield* initial() : initial) })
    }

    const ref: Ref<A> = hookStates.get(id)!

    function setState(current: A | undefined | void | null) {
      ref.current = Maybe.of(current)
    }

    return [ref, setState] as const
  }

  function* useChannel<A>(channel: Channel<E, A>): Effects<E, UseState<A>> {
    // Only create updateChannel once
    if (channelUpdates.has(channel)) {
      return channelUpdates.get(channel)!
    }

    const getValue = () => yield* manager.consumeChannel(channel, hookEnvironment)
    const provide = yield* manager.updateChannel(channel, hookEnvironment)

    function* updateChannel(update: Arity1<A, A>) {
      return yield* provide(update(yield* getValue()))
    }

    const useState: UseState<A> = [getValue, updateChannel]

    channelUpdates.set(channel, useState)

    return useState
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
