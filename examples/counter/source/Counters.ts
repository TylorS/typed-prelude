import { html, useState } from '@typed/dom'
import { pipe } from '@typed/lambda'
import { decrement, increment } from '@typed/math'

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

export const Counters = () => html`
  <main>
    ${ContainedCounter()} ${ContainedCounter()} ${ContainedCounter()}
  </main>
`
