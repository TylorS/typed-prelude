import { addEventListener } from '@typed/dom'
import { createUseEffect, createUseState, withCreateHook } from '@typed/hooks'
import { createUseDomEnv } from '../channels/DomEnvChannel'

export const createUseDocumentReady = withCreateHook(
  createHook =>
    [createHook(createUseState), createHook(createUseDomEnv), createHook(createUseEffect)] as const,
  ([useState, useDomEnv, useEffect], fullyLoaded: boolean = false) => {
    const { window } = useDomEnv()
    const [bool, setBool] = useState(false)

    useEffect(() =>
      addEventListener(fullyLoaded ? 'load' : 'DOMContentLoaded', window, () => setBool(true), {
        once: true,
      }),
    )

    return [bool]
  },
)
