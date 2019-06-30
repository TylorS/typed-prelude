import { HistoryEnv } from '@typed/history'

export interface DomEnv<A = null> extends HistoryEnv<A> {
  readonly window: Window
  readonly document: Document
  readonly localStorage: Storage
  readonly sessionStorage: Storage
  readonly customElements: CustomElementRegistry
  readonly Event: typeof Event
  readonly CustomEvent: typeof CustomEvent
}
