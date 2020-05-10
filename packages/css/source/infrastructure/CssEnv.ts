import { Rules } from '../model'

export type CssEnv = {
  readonly classNameLength?: number
  readonly styleSheet: { textContent: string }
  readonly rules: Rules
}
