import { Channel, CreateHookContext, HooksContext } from '../types'

export type ManagerState = ReturnType<typeof createManagerState>

export function createManagerState() {
  const createHookContexts = new WeakMap<HooksContext, CreateHookContext>()
  const parentContexts = new WeakMap<HooksContext, HooksContext | null>()
  const childContexts = new WeakMap<HooksContext, Set<HooksContext>>()
  const channelContexts = new WeakMap<Channel, Set<HooksContext>>()

  return {
    createHookContexts,
    parentContexts,
    childContexts,
    channelContexts,
  }
}
