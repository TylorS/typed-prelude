import { isBrowser } from '@typed/common'
import { createHistoryEnv, wrapInSubscription } from '@typed/history'
import { serverStorage } from '@typed/storage'
import { DomEnv } from './types'

export type CreateDomEnvOptions = {
  serverUrl?: string
  localStorage?: Map<string, string>
  sessionStorage?: Map<string, string>
  customElements?: CustomElementRegistry
}

const POPSTATE_EVENT_TYPE = 'popstate'

// Creates a DOM Environment that works in both Node & Browsers.
// Not 100% Browser compliant in Node.
// Based on basicHTML, @typed/history, and @typed/storage
// Easy way to avoid globals. Options are only used in server environments
export function createDomEnv<A>(options: CreateDomEnvOptions = {}): DomEnv<A> {
  if (!isBrowser) {
    const { init, Event, CustomEvent } = require('basichtml')
    const { window, document, customElements } = init({ customElements: options.customElements })
    const { history, location, subscription } = wrapInSubscription(
      createHistoryEnv<A>(options.serverUrl),
    )
    const localStorage = serverStorage(options.localStorage)
    const sessionStorage = serverStorage(options.sessionStorage)

    subscription.subscribe(({ history }) => {
      const event = new Event(POPSTATE_EVENT_TYPE, { bubbles: true, cancelable: false })

        // Add State to Event
      ;(event as any).state = history.state

      window.dispatchEvent(event)

      if (window.onpopstate) {
        window.onpopstate(event)
      }
    })

    return {
      window,
      document,
      location,
      history,
      localStorage,
      sessionStorage,
      customElements,
      Event,
      CustomEvent,
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
    Event,
    CustomEvent,
  }
}
