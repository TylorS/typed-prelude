import { isBrowser } from '@typed/common'
import { createHistoryEnv, wrapInSubscription } from '@typed/history'
import { serverStorage } from '@typed/storage'
import { DomEnv } from './types'

export type CreateDomEnvOptions = {
  serverUrl?: string // Location.href to fallback to in node environment
  localStorage?: Map<string, string> // Share localStorage across DomEnvs
  sessionStorage?: Map<string, string> // Share sessionStorage across DomEnvs
  customElements?: CustomElementRegistry // Share customElements across DomEnvs
  setGlobals?: boolean // Will add DomEnv to 'global' in node environment
  window?: any // Custom value for window - defaults to 'global'
}

const POPSTATE_EVENT_TYPE = 'popstate'

// Creates a DOM Environment that works in both Node & Browsers.
// Not 100% Browser compliant in Node.
// Based on basicHTML, @typed/history, and @typed/storage
// Easy way to avoid globals. Options are only used in server environments
export function createDomEnv<A>(options: CreateDomEnvOptions = {}): DomEnv<A> {
  if (!isBrowser) {
    const basic = require('basichtml')

    const { history, location, subscription } = wrapInSubscription(
      createHistoryEnv<A>(options.serverUrl),
    )
    const localStorage = serverStorage(options.localStorage)
    const sessionStorage = serverStorage(options.sessionStorage)
    const customElements = options.customElements || new basic.CustomElementRegistry()
    const window = (options.window || (global as any)) as Window
    const document = new basic.Document(customElements)

    const NodeImage = (width?: number | undefined, height?: number | undefined) =>
      basic.Image(document, width, height)
    class NodeHTMLElement extends basic.HTMLElement {
      constructor(name: string) {
        super(document, name)
      }
    }

    basic.EventTarget.init(window)

    subscription.subscribe(({ history }) => {
      const event = new basic.Event(POPSTATE_EVENT_TYPE, { bubbles: true, cancelable: false })

        // Add State to Event
      ;(event as any).state = history.state

      window.dispatchEvent(event)

      if (window.onpopstate) {
        window.onpopstate(event)
      }
    })

    if (options.setGlobals) {
      const win = global as any

      win.window = window
      win.document = document
      win.customElements = customElements
      win.history = history
      win.location = location
      win.localStorage = localStorage
      win.sessionStorage = sessionStorage
      win.HTMLElement = NodeHTMLElement
      win.Event = basic.Event
      win.CustomEvent = basic.CustomEvent
      win.Image = NodeImage
    }

    return {
      window,
      document,
      location,
      history,
      localStorage,
      sessionStorage,
      customElements,
      HTMLElement: (NodeHTMLElement as any) as typeof HTMLElement,
      Event: basic.Event,
      CustomEvent: basic.CustomEvent,
      Image: (NodeImage as any) as typeof Image,
    }
  }

  return {
    window,
    document: window.document,
    location: window.location,
    history: window.history,
    localStorage: window.localStorage,
    sessionStorage: window.sessionStorage,
    customElements: window.customElements,
    HTMLElement,
    Event,
    CustomEvent,
    Image,
  }
}
