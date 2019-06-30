import { createDomEnv, html, render, useHttp, useState, withHooks } from '../../packages/dom/source'
import { createHttpEnv, get } from '../../packages/http/source'
import { decrement, increment } from '../../packages/math/source'
import { createTimer } from '../../packages/timer/source'

const JSON_URL = 'https://jsonplaceholder.typicode.com/todos/1'
const makeRequest = () => get<{}>(JSON_URL)

const timer = createTimer()
const { document } = createDomEnv()
const httpEnv = createHttpEnv({ timer })

const Counter = withHooks(() => {
  const [count, setCount] = useState(0)
  const [response] = useHttp(makeRequest, httpEnv)

  return html`
    <section>
      <button onclick=${() => setCount(decrement)}>Decrement</button>
      <p>Count: ${count}</p>
      <button onclick=${() => setCount(increment)}>Increment</button>
    </section>
  `
})

render(document.body, Counter)
