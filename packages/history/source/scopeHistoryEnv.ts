import { ArgsOf } from '@typed/lambda'
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
    assign: location.assign.bind(location),
    reload: location.reload.bind(location),
    replace: location.replace.bind(location),
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
