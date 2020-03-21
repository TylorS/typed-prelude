import { DomEnv } from '@typed/dom'

export interface RenderEnv extends DomEnv {
  readonly rootElement: Element
}
