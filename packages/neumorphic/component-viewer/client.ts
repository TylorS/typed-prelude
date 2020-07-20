import { CryptoFailure } from '@typed/crypto'
import { createCssEnv, useClassName } from '@typed/css'
import { createDomEnv, querySelector } from '@typed/dom'
import { Fail, runEffects } from '@typed/effects'
import { createHookEnvironment, createHooksManagerEnv } from '@typed/hooks'
import { createPatchEnv, html, patchOnRaf, text, useListManager } from '@typed/html'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { fromJust, isNothing } from '@typed/maybe'
import { NonNegativeInteger } from '@typed/new-type'
import { createTimer } from '@typed/timer'
import { BrowserGenerator } from '@typed/uuid'
import {
  Button,
  ButtonDisplay,
  ButtonParams,
  colorToString,
  getTheme,
  Rgba,
  ThemeMode,
} from '../source'
import { CSS_STYLESHEET_SELECTOR, ROOT_ELEMENT_SELECTOR } from './constants'

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
      primary: Rgba.create(220, 220, 220),
      secondary: Rgba.create(120, 20, 120),
      tertiary: Rgba.create(220, 220, 220),
      greyScale: [
        Rgba.create(0, 0, 0),
        Rgba.create(32, 32, 32),
        Rgba.create(64, 64, 64),
        Rgba.create(96, 96, 96),
        Rgba.create(128, 128, 128),
        Rgba.create(159, 159, 159),
        Rgba.create(191, 191, 191),
        Rgba.create(223, 223, 223),
        Rgba.create(255, 255, 255),
      ],
    },
    borderRadius: 4 as NonNegativeInteger,
    margin: 4 as NonNegativeInteger,
    padding: 4 as NonNegativeInteger,
    transitionDuration: 300 as NonNegativeInteger,
  },
  timer,
})

function* main() {
  const { padding, colors } = yield* getTheme()
  const { primary } = colors
  const buttonParams: ReadonlyArray<ButtonParams> = [
    {
      display: ButtonDisplay.Primary,
      children: [text('Primary')],
      styles: { margin: '1rem' },
    },
    {
      display: ButtonDisplay.Secondary,
      children: [text('Secondary')],
      styles: { margin: '1rem' },
    },
    {
      display: ButtonDisplay.Tertiary,
      children: [text('Tertiary')],
      styles: { margin: '1rem' },
    },
    {
      display: ButtonDisplay.Outline,
      children: [text('Outline')],
      styles: { margin: '1rem' },
    },
    {
      display: ButtonDisplay.Chromeless,
      children: [text('Chromeless')],
      styles: { margin: '1rem' },
    },
  ]
  const buttons = yield* useListManager(buttonParams, (params) => params.display, Button)
  const hostClass = yield* useClassName({
    padding: padding * 2,
    backgroundColor: colorToString(primary),
    height: '100%',
    width: '100%',
  })

  return html('section', { className: hostClass }, [
    html('h1', null, [text('@typed/neumorhpic')]),

    html('section', { id: 'buttons' }, [html('h2', null, [text('Button')]), ...buttons]),
  ])
}
