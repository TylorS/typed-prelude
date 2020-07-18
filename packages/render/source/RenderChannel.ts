import { Disposable, LazyDisposable } from '@typed/disposable'
import { Effects, get, runWith, TimerEnv } from '@typed/effects'
import {
  createChannel,
  HookEffects,
  HookEnvironment,
  HookEnvironmentEvent,
  HookEnvironmentEventType,
  HookEnvironmentRemovedEvent,
  HookEnvironmentUpdatedEvent,
  HooksManagerEnv,
  runWithHooks,
  useChannelValue,
} from '@typed/hooks'
import { fromJust, isNothing, Just } from '@typed/maybe'
import { filter } from '@typed/subscription'
import { createEnvironmentStateManager } from './createEnvironmentStateManager'
import { createIdleScheduler, IdleScheduler } from './createIdleScheduler'
import { FifoQueue } from './FifoQueue'
import { PatchEnv } from './Patch'
import { RenderRef } from './RenderRef'

type EnvId = HookEnvironment['id']

export interface RenderState<A, B> extends LazyDisposable {
  readonly setRenderable: (id: EnvId, renderable: B) => void
  readonly getRenderable: (id: EnvId) => B
  readonly setRenderer: (
    id: EnvId,
    renderer: [(ref: RenderRef<A>) => HookEffects<any, B>, any],
  ) => void
  readonly setRendered: (id: EnvId, rendered: RenderRef<A>) => void
  readonly getRendered: (id: EnvId) => RenderRef<A>
  readonly currentlyUpdating: (id: EnvId) => boolean
}

export const useRenderChannel = <A, B>() =>
  useChannelValue(RenderChannel) as HookEffects<
    HooksManagerEnv & TimerEnv & PatchEnv<A, B, unknown>,
    RenderState<A, B>
  >

export const RenderChannel = createChannel(function* <A, B>(): Effects<
  HooksManagerEnv & TimerEnv & PatchEnv<A, B, unknown>,
  RenderState<A, B>
> {
  const { hooksManager, timer, patch } = yield* get<
    HooksManagerEnv & TimerEnv & PatchEnv<A, B, unknown>
  >()
  const { hookEvents } = hooksManager
  const removeEvents = filter(isRemoveEvent, hookEvents)
  const updateEvents = filter(isUpdateEvent, hookEvents)
  const queue = new FifoQueue<HookEnvironment>()
  const disposable = Disposable.lazy()
  const scheduler: IdleScheduler = createIdleScheduler(queue, applyUpdate)
  const {
    removeEnvById,
    getRenderable,
    setRenderable,
    setRendered,
    setRenderer,
    updateEnv,
    currentlyUpdating,
    setUpdating,
    getRendered,
    getRenderer,
  } = createEnvironmentStateManager<A, B>({ queue, scheduler, hooksManager, timer })

  disposable.addDisposable(removeEvents.subscribe(([, { id }]) => removeEnvById(id)))

  disposable.addDisposable(
    updateEvents.subscribe(([, { hookEnvironment, updated }]) =>
      updateEnv(hookEnvironment, updated),
    ),
  )

  function* applyUpdate(hookEnvironment: HookEnvironment) {
    const { id, updated } = hookEnvironment
    const rendered = getRendered(id)
    const renderer = getRenderer(id)
    const notReadyForPatching =
      !rendered || isNothing(rendered.ref.current) || !renderer || !updated
    const shouldRequeue = currentlyUpdating(id) && !queue.some((e) => e.id === hookEnvironment.id)

    if (shouldRequeue) {
      queue.enqueue(hookEnvironment)
    }

    if (notReadyForPatching || shouldRequeue) {
      return
    }

    setUpdating(id, true)

    const [render, env] = renderer!

    const b = yield* runWith(runWithHooks(render(rendered!), hookEnvironment), env)
    const a = yield* patch(fromJust(rendered!.ref.current as Just<A>), b)

    setRenderable(id, b)
    rendered!.ref.current = Just.of(a)

    setUpdating(id, false)
  }

  return {
    setRenderable,
    getRenderable,
    setRenderer,
    currentlyUpdating,
    setRendered,
    getRendered,
    ...disposable,
  } as const
})

function isRemoveEvent(event: HookEnvironmentEvent): event is HookEnvironmentRemovedEvent {
  return event[0] === HookEnvironmentEventType.Removed
}

function isUpdateEvent(event: HookEnvironmentEvent): event is HookEnvironmentUpdatedEvent {
  return event[0] === HookEnvironmentEventType.Updated
}
