export const isBrowser: boolean = ((): boolean =>
  typeof window !== 'undefined' && typeof document !== 'undefined')()
