import { Env, map } from '@typed/env'
import { fromJust } from '@typed/maybe'
import { isDoneLoading, Loadable } from './Loadable'
import { HttpEnv, Request } from './types'

export const toJson = <A extends {} = {}>(request: Request<A>): Env<HttpEnv, Loadable<A>> =>
  map(loadable => {
    if (!isDoneLoading(loadable)) {
      return loadable
    }

    try {
      const { responseText } = fromJust(loadable)
      const json = JSON.parse(responseText)

      return Loadable.of(json)
    } catch (error) {
      return Loadable.error(error)
    }
  }, request)
