import { CssEnv } from './CssEnv'

export function createCssEnv(options: Partial<CssEnv> = {}): CssEnv {
  return {
    rules: new Map(),
    styleSheet: { textContent: '' },
    ...options,
  }
}
