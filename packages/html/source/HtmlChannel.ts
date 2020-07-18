import { Disposable } from '@typed/disposable'
import { get, runWith, TimerEnv } from '@typed/effects'
import {
  Channel,
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
import { isNothing } from '@typed/maybe'
import { PatchEnv } from '@typed/render'
import { filter } from '@typed/subscription'
import { createEnvironmentStateManager, EnvId, Renderer } from './createEnvironmentStateManager'
import { createIdleScheduler } from './createIdleScheduler'
import { VNode } from './domain'
import { FifoQueue } from './FifoQueue'

export const useHtmlChannel = (): HookEffects<
  HooksManagerEnv & TimerEnv & PatchEnv<VNode, VNode, unknown>,
  HtmlState
> => useChannelValue(HtmlChannel)

export type HtmlState = {
  readonly setRenderable: (id: EnvId, renderable: VNode) => void
  readonly getRenderable: (id: EnvId) => VNode
  readonly setRenderer: <E>(id: EnvId, renderer: Renderer<E>) => void
}

export const HtmlChannel: Channel<
  HooksManagerEnv & TimerEnv & PatchEnv<VNode, VNode, unknown>,
  HtmlState
> = createChannel(function* () {
  const { hooksManager, timer, patch } = yield* get<
    HooksManagerEnv & TimerEnv & PatchEnv<VNode, VNode, unknown>
  >()
  const { hookEvents } = hooksManager
  const removeEvents = filter(isRemoveEvent, hookEvents)
  const updateEvents = filter(isUpdateEvent, hookEvents)
  const disposable = Disposable.lazy()
  const queue = new FifoQueue<HookEnvironment>()
  const scheduler = createIdleScheduler(queue, applyUpdate)
  const {
    removeEnvById,
    getRenderable,
    setRenderable,
    getRenderer,
    setRenderer,
    updateEnv,
    currentlyUpdating,
    setUpdating,
  } = createEnvironmentStateManager({ queue, scheduler, hooksManager, timer })

  // Track removed environments
  disposable.addDisposable(removeEvents.subscribe(([, { id }]) => removeEnvById(id)))

  // Track updated environments
  disposable.addDisposable(
    updateEvents.subscribe(([, { hookEnvironment, updated }]) =>
      updateEnv(hookEnvironment, updated),
    ),
  )

  // Apply updates
  function* applyUpdate(hookEnvironment: HookEnvironment) {
    const { id, updated } = hookEnvironment
    const renderable = getRenderable(id)
    const renderer = getRenderer(id)
    const notReadyForPatching =
      !renderable || isNothing(renderable.node.current) || !renderer || !updated
    const shouldRequeue = currentlyUpdating(id) && !queue.some((e) => e.id === hookEnvironment.id)

    if (shouldRequeue) {
      queue.enqueue(hookEnvironment)
    }

    if (notReadyForPatching || shouldRequeue) {
      return
    }

    setUpdating(id, true)

    const [render, env] = renderer!
    const vNode = yield* runWith(runWithHooks(render(), hookEnvironment), env)

    setRenderable(id, yield* patch(renderable, vNode))
    setUpdating(id, false)
  }

  return {
    setRenderable,
    getRenderable,
    setRenderer,
  } as const
})

function isRemoveEvent(event: HookEnvironmentEvent): event is HookEnvironmentRemovedEvent {
  return event[0] === HookEnvironmentEventType.Removed
}

function isUpdateEvent(event: HookEnvironmentEvent): event is HookEnvironmentUpdatedEvent {
  return event[0] === HookEnvironmentEventType.Updated
}
