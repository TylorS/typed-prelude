import { addEventListener } from '@typed/dom'
import { createUseEffect, createUseState, withCreateHook } from '@typed/hooks'
import { createUseDomEnv } from '../channels/DomEnvChannel'

const getSizes = (window: Window) => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  } as const
}

export const createUseWindowSize = withCreateHook(
  createHook =>
    [createHook(createUseState), createHook(createUseDomEnv), createHook(createUseEffect)] as const,
  ([useState, useDomEnv, useEffect]) => {
    const { window } = useDomEnv()
    const [sizing, setSizing] = useState(() => getSizes(window))

    useEffect(window => addEventListener('resize', window, () => setSizing(getSizes(window))), {
      args: [window],
    })

    return sizing
  },
)
