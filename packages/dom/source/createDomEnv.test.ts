import { describe, it } from '@typed/test'
import { createDomEnv } from './createDomEnv'

export const test = describe(`createDomEnv`, [
  it(`returns a node-friendly DOM implementation`, ({ equal, same }, done) => {
    const serverUrl = 'https://tylors.github.io/typed-prelude'
    const state = {}
    const pathname = '/test'
    const { window, document, customElements, HTMLElement, history, location } = createDomEnv({
      serverUrl,
    })

    const innerHtml = `<button>My Element</button>`
    class MyElement extends HTMLElement {
      constructor() {
        super()
        this.innerHTML = innerHtml
      }
    }

    customElements.define('my-element', MyElement)

    same<any>(window, global)

    const myElement = document.createElement('my-element')

    equal(`<my-element>${innerHtml}</my-element>`, myElement.outerHTML)

    equal(serverUrl, location.href)

    window.addEventListener('popstate', ev => {
      same(state, ev.state)
      equal(pathname, location.pathname)

      done()
    })

    history.pushState(state, '', pathname)
  }),
])
