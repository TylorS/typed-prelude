import { document, render, withHooks } from '@typed/dom'
import { Counters } from './Counters'

render(document.body, withHooks(Counters))
