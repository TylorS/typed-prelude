import { Rules } from '../model'

export type CssEnv = {
  readonly styleSheet: { textContent: string | null }
  readonly rules: Rules
  readonly classNamePrefix?: string
  readonly classNameLength?: number
}
