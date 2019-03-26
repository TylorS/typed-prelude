export const BUILD_ENV: BuildEnvironment = (process.env.BUILD_ENV ||
  'development') as BuildEnvironment

export type BuildEnvironment = 'development' | 'production'

export const isBrowser: boolean = ((): boolean =>
  typeof window !== 'undefined' && typeof document !== 'undefined')()
