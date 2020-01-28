import { isBrowser } from '@typed/common'
import { DomEnv } from './types'

// Creates a DOM Environment that works in both Node & Browsers.
// Not 100% Browser compliant in Node.
// Based on basicHTML, @typed/history, and @typed/storage
// Easy way to avoid globals. Options are only used in server environments
export function createDomEnv<A>(
  options?: import('./createServerDomEnv').CreateServerDomEnvOptions,
): DomEnv<A> {
  if (!isBrowser) {
    const {
      createServerDomEnv,
    }: typeof import('./createServerDomEnv') = require('./createServerDomEnv')

    return createServerDomEnv(options)
  }

  return {
    window,
    document: window.document,
    location: window.location,
    history: window.history,
    localStorage: window.localStorage,
    sessionStorage: window.sessionStorage,
    customElements: window.customElements,
    HTMLElement: window.HTMLElement,
    NodeFilter: window.NodeFilter,
    Event: window.Event,
    CustomEvent: window.CustomEvent,
    Image: window.Image,
    crypto: window.crypto,
  }
}
