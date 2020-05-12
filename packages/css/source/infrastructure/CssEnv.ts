import { Rules } from '../model'

export type CssEnv = {
  readonly classNamePrefix?: string
  readonly classNameLength?: number
  readonly styleSheet: { textContent: string }
  readonly rules: Rules
}
