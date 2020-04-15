import { Disposable } from '@typed/disposable'
import { Effect, Effects, PureEffect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1 } from '@typed/lambda'
import { equals } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { uuid4 } from '@typed/uuid'
import {
  HookEnvironment,
  HookEnvironmentEventType,
  HooksManager,
  InitialState,
  Ref,
  UseRef,
  UseState,
} from './types'

const toNull = InitialState.of(null)

export function createHookEnvironment(manager: HooksManager): HookEnvironment {
  const id = uuid4(manager.randomUuidSeed())
  const { nextId, resetId } = createIdGenerator()
  const hookStates = new Map<number, any>()
  const disposable = Disposable.lazy()
  const hookEnvironment: HookEnvironment = {
    id,
    useState,
    useRef,
    resetId,
    get updated() {
      return manager.hasBeenUpdated(hookEnvironment)
    },
    *clearUpdated() {
      manager.hookEvents.publish([
        HookEnvironmentEventType.Updated,
        { hookEnvironment, updated: false },
      ])
    },
    ...disposable,
  }

  return hookEnvironment

  function* useState<E, A>(initial: InitialState<E, A>): Effects<E, UseState<A>> {
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

        manager.hookEvents.publish([
          HookEnvironmentEventType.Updated,
          { hookEnvironment, updated: true },
        ])
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
  ): Effects<E, UseRef<A>> {
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
