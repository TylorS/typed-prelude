import { Timer } from './types'

export const setTimeoutDelay: Timer['delay'] = (fn, delayMS) => {
  const handle = setTimeout(fn, delayMS)
  const dispose = () => clearTimeout(handle)

  return { dispose }
}
