import { BrowserGenerator } from '@typed/uuid'
import { Button, ButtonDisplay, ButtonParams, Rgba, ThemeMode } from '../source'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { createCssEnv } from '@typed/css'
import { createDomEnv, querySelector } from '@typed/dom'
import { createHookEnvironment, createHooksManagerEnv } from '@typed/hooks'
import { createPatchEnv, html, patchOnRaf, text, useListManager } from '@typed/html'
import { createTimer } from '@typed/timer'
import { CryptoFailure } from '@typed/crypto'
import { CSS_STYLESHEET_SELECTOR, ROOT_ELEMENT_SELECTOR } from './constants'
import { Fail, runEffects } from '@typed/effects'
import { fromJust, isNothing } from '@typed/maybe'
import { NonNegativeInteger } from '@typed/new-type'

const domEnv = createDomEnv()
const rootElement = querySelector(ROOT_ELEMENT_SELECTOR, domEnv.document.documentElement)
const stylesElement = querySelector(CSS_STYLESHEET_SELECTOR, domEnv.document.documentElement)

if (isNothing(rootElement)) {
  throw new Error(`Unable to find root element ${ROOT_ELEMENT_SELECTOR}`)
}

if (isNothing(stylesElement)) {
  throw new Error(`Unable to find styles element ${CSS_STYLESHEET_SELECTOR}`)
}

const timer = createTimer()
const uuidEnv = new BrowserGenerator()
const hooksManagerEnv = createHooksManagerEnv(uuidEnv)
const hookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
const cssEnv = createCssEnv({ styleSheet: fromJust(stylesElement) })
const logger = createConsoleLogger({ logLevel: LogLevel.INFO, clock: timer })

runEffects(patchOnRaf(main, fromJust(rootElement)), {
  ...domEnv,
  ...createPatchEnv(),
  ...cssEnv,
  ...hooksManagerEnv,
  [CryptoFailure]: Fail,
  cancelAnimationFrame,
  crypto,
  hookEnvironment,
  logger,
  requestAnimationFrame,
  theme: {
    mode: ThemeMode.Light,
    colors: {
      primary: Rgba.create(255, 166, 120),
      secondary: Rgba.create(120, 20, 120),
      greyScale: [
        Rgba.create(0, 0, 0), // White
        Rgba.create(32, 32, 32), // Lightest Grey
        Rgba.create(64, 64, 64), // Lighter Grey
        Rgba.create(96, 96, 96), // Light Grey
        Rgba.create(128, 128, 128), // Grey
        Rgba.create(159, 159, 159), // Dark Grey
        Rgba.create(191, 191, 191), // Darker Grey
        Rgba.create(223, 223, 223), // Darkest Grey
        Rgba.create(255, 255, 255), // Black
      ],
    },
    borderRadius: 4 as NonNegativeInteger,
    margin: 4 as NonNegativeInteger,
    padding: 4 as NonNegativeInteger,
  },
  timer,
})

function* main() {
  const buttonParams: ReadonlyArray<ButtonParams> = [
    {
      display: ButtonDisplay.Primary,
      children: [text('Primary')],
    },
    {
      display: ButtonDisplay.Secondary,
      children: [text('Secondary')],
    },
    {
      display: ButtonDisplay.Outline,
      children: [text('Outline')],
    },
    {
      display: ButtonDisplay.Chromeless,
      children: [text('Chromeless')],
    },
  ]
  const buttons = yield* useListManager(buttonParams, (params) => params.display, Button)

  return html('section', {}, [...buttons])
}
