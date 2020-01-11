import { createDomEnv } from '@typed/dom'
import { createElement } from 'react'
import { render } from 'react-dom'
import { numberOfMines, puzzleSizes } from './constants'
import { MineSweeper } from './ui/MineSweeper'

const domEnv = createDomEnv()
const { document } = domEnv
const rootElementSelector = `#application`
const rootElement = document.querySelector(rootElementSelector)

if (!rootElement) {
  throw new Error(`Unable to find root element ${rootElementSelector}`)
}

render(createElement(MineSweeper, { numberOfMines, puzzleSizes, domEnv }), rootElement)

if ((module as any).hot) {
  ;(module as any).hot.accept()
}
