import { Rules } from '../model'

export type CssEnv = {
  readonly styleSheet?: { textContent: string }
  readonly classNameLength?: number
  readonly rules: Rules
}
