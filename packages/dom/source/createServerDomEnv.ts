import { createHistoryEnv, HistoryEnv, wrapInSubscription } from '@typed/history'
import { serverStorage } from '@typed/storage'
import { NodeFilter as ServerNodeFilter } from './NodeFilter'
import { NodeIteratorImpl } from './NodeIterator'
import { TreeWalkerImpl } from './TreeWalker'

import { createMatchMedia } from './createMatchMedia'
import { DomEnv, INodeFilter } from './types'

export type CreateServerDomEnvOptions = {
  serverUrl?: string // Location.href to fallback to in node environment
  localStorage?: Map<string, string> // Share localStorage across DomEnvs
  sessionStorage?: Map<string, string> // Share sessionStorage across DomEnvs
  customElements?: CustomElementRegistry // Share customElements across DomEnvs
  setGlobals?: boolean // Will add DomEnv to 'global' in node environment
  window?: any // Custom value for window - defaults to 'global'
  innerHeight?: number
  innerWidth?: number
  mediaType?: string // Used to match CSS Media queries
}

const POPSTATE_EVENT_TYPE = 'popstate'

export function createServerDomEnv<A>(options: CreateServerDomEnvOptions = {}) {
  const basic = require('basichtml')

  const { history, location, subscription } = wrapInSubscription(
    createHistoryEnv<A>(options.serverUrl),
  )
  const localStorage = serverStorage(options.localStorage)
  const sessionStorage = serverStorage(options.sessionStorage)
  const customElements = options.customElements || new basic.CustomElementRegistry()
  const window = (options.window || (global as any)) as Window
  const document = new basic.Document(customElements)

  if (options.innerHeight !== void 0) {
    ;(window as any).innerHeight = options.innerHeight
  }

  if (options.innerWidth !== void 0) {
    ;(window as any).innerWidth = options.innerWidth
  }

  document.createNodeIterator = (
    root: Node,
    whatToShow: number = NodeFilter.SHOW_ALL,
    filter?: INodeFilter | null,
  ) => new NodeIteratorImpl(root, whatToShow, filter ? filter : void 0)

  document.createTreeWalker = (
    root: Node,
    whatToShow: number = NodeFilter.SHOW_ALL,
    filter?: INodeFilter | null,
  ) => new TreeWalkerImpl(root, whatToShow, filter ? filter : void 0)

  const NodeImage = (width?: number | undefined, height?: number | undefined) =>
    basic.Image(document, width, height)

  class NodeHTMLElement extends basic.HTMLElement {
    constructor(name: string) {
      super(document, name)
    }
  }

  basic.EventTarget.init(window)
  subscription.subscribe(handleHistoryChange(window))

  if (window.matchMedia === void 0) {
    window.matchMedia = createMatchMedia(window, options.mediaType)
  }

  const domEnv: DomEnv<A> = {
    window,
    document,
    location,
    history,
    localStorage,
    sessionStorage,
    customElements,
    HTMLElement: (NodeHTMLElement as any) as typeof HTMLElement,
    NodeFilter: ServerNodeFilter,
    Event: basic.Event,
    CustomEvent: basic.CustomEvent,
    Image: (NodeImage as any) as typeof Image,
  }

  if (options.setGlobals) {
    const win = global as any

    Object.keys(domEnv).forEach(key => (win[key] = domEnv[key as keyof DomEnv<A>]))
  }

  return domEnv
}

function handleHistoryChange(window: Window) {
  const basic = require('basichtml')

  return ({ history }: HistoryEnv) => {
    const event = new basic.Event(POPSTATE_EVENT_TYPE, { bubbles: true, cancelable: false })

      // Add State to Event
    ;(event as any).state = history.state

    window.dispatchEvent(event)

    if (window.onpopstate) {
      window.onpopstate(event)
    }
  }
}
