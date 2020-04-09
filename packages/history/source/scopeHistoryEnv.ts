import { ArgsOf } from '@typed/lambda'
import { parseHref } from './server'
import { HistoryEnv, Path, pathJoin } from './types'

export function scopeHistoryEnv<A>(
  scope: Path,
  { history, location }: HistoryEnv<A>,
): HistoryEnv<A> {
  const pushState = (...args: ArgsOf<History['pushState']>) =>
    history.pushState(args[0], args[1], pathJoin(['/', scope, args[2]]))
  const replaceState = (...args: ArgsOf<History['replaceState']>) =>
    history.replaceState(args[0], args[1], pathJoin(['/', scope, args[2]]))
  const back = () => history.back()
  const forward = () => history.forward()
  const go = (amount: number) => history.go(amount)

  const updatedHistory = {
    pushState,
    replaceState,
    back,
    forward,
    go,
    get length() {
      return history.length
    },
    set scrollRestoration(mode: History['scrollRestoration']) {
      history.scrollRestoration = mode
    },
    get scrollRestoration() {
      return history.scrollRestoration
    },
    get state() {
      return history.state
    },
  }

  const updatedLocation: Location = {
    assign: (url) => {
      const { protocol, host, relative } = parseHref(url)
      const href = protocol + `//` + pathJoin([host, scope, relative])

      return location.assign(href)
    },
    reload: location.reload.bind(location),
    replace: (url) => {
      const { protocol, host, relative } = parseHref(url)
      const href = protocol + `//` + pathJoin([host, scope, relative])

      return location.replace(href)
    },
    ...location,
    get pathname() {
      return location.pathname.replace(pathJoin(['/', scope], true), '')
    },
    set pathname(path: string) {
      location.pathname = pathJoin(['/', scope, path])
    },
  }

  return {
    history: updatedHistory,
    location: updatedLocation,
  }
}
