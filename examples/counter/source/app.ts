import { createDomEnv, html, render, useState, withHooks } from '../../../packages/dom/esm'
import { decrement, increment } from '../../../packages/math/esm'

const { document } = createDomEnv()

const Counter = withHooks(() => {
  const [count, setCount] = useState(1)

  return html`
    <section>
      <button onclick=${() => setCount(decrement)}>Decrement</button>
      <p>Count: ${count}</p>
      <button onclick=${() => setCount(increment)}>Increment</button>
    </section>
  `
})

const Counters = () => html`
  <main>
    ${Counter()} ${Counter()}
  </main>
`

render(document.body, Counters)
