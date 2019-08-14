import { HistoryEnv } from '@typed/history'

export interface DomEnv<A = null> extends HistoryEnv<A> {
  readonly window: Window
  readonly document: Document
  readonly localStorage: Storage
  readonly sessionStorage: Storage
  readonly customElements: CustomElementRegistry
  readonly HTMLElement: typeof HTMLElement
  readonly NodeFilter: typeof NodeFilter
  readonly Event: typeof Event
  readonly CustomEvent: typeof CustomEvent
  readonly Image: typeof Image
}

export type INodeFilter = NodeFilter
