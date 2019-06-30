import { createDomEnv, html, render, useState, withHooks } from '@typed/dom'
import { pipe } from '@typed/lambda'
import { decrement, increment } from '@typed/math'

const { document } = createDomEnv()

const Counter = () => {
  const [count, setCount] = useState(0)

  return html`
    <section>
      <button onclick=${() => setCount(decrement)}>Decrement</button>
      <p>Count: ${count}</p>
      <button onclick=${() => setCount(increment)}>Increment</button>
    </section>
  `
}

const Container = (node: Node) =>
  html`
    <section style=${{ margin: '1rem', padding: '1rem', border: '1px solid #efefef' }}>
      ${node}
    </section>
  `

const ContainedCounter = pipe(
  Counter,
  Container,
)

const Counters = () => html`
  <main>
    ${ContainedCounter()} ${ContainedCounter()} ${ContainedCounter()}
  </main>
`

render(document.body, withHooks(Counters))
