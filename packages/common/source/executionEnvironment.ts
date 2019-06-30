// Very loose definition of a browser environment
export const isBrowser: boolean = typeof window !== 'undefined' && typeof document !== 'undefined'
