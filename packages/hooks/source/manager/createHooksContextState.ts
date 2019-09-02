export type HooksContextState = ReturnType<typeof createHooksContextState>

export const createHooksContextState = (fn: (...args: any) => any) => ({
  depth: 0,
  hasBeenUpdated: true,
  shouldRerunHooks: true,
  fn,
  fnArguments: [],
  fnContext: null,
  returnValue: null,
  currentId: 0,
})
