import { createDomEnv, render, withHooks } from '@typed/dom'
import { Counters } from './Counters'

const { document } = createDomEnv()

render(document.body, withHooks(Counters))
