import { Disposable } from '@typed/disposable'
import { curry, pipe } from '@typed/lambda'
import { Clock, RequestIdleCallbackDeadline, Timer, whenIdle } from '@typed/timer'
import { isValidStatus } from './isValidStatus'
import { HttpCallbacks, HttpEnv, HttpMethod, HttpOptions, HttpResponse } from './types'

export type WithHttpManagementOptions = {
  readonly timer: Timer
  readonly expiration?: number
  readonly methodsToCache?: HttpMethod[]
  readonly getCacheKey?: (url: string, options: HttpOptions) => string
}

// milliseconds
const SECOND = 1000
const MINUTE = 60 * SECOND
const DEFAULT_EXPIRATION = 5 * MINUTE
const DEFAULT_METHODS_TO_CACHE: HttpMethod[] = ['GET', 'HEAD', 'OPTIONS']

type Timestamp = ReturnType<Clock['currentTime']>
type Timestamped = { timestamp: Timestamp; response: HttpResponse }

export const withHttpManagement: {
  (options: WithHttpManagementOptions, env: HttpEnv): HttpEnv
  (options: WithHttpManagementOptions): (env: HttpEnv) => HttpEnv
} = curry(__withHttpManagement)

function __withHttpManagement(options: WithHttpManagementOptions, env: HttpEnv): HttpEnv {
  const {
    timer,
    expiration = DEFAULT_EXPIRATION,
    methodsToCache = DEFAULT_METHODS_TO_CACHE,
    getCacheKey = defaultCacheKey,
  } = options
  const cache = new Map<string, Timestamped>()
  let cacheClearDisposable = Disposable.None

  function clearAllOldResponses(deadline: RequestIdleCallbackDeadline, time: number) {
    const expired = time - expiration
    const iterator = cache.entries()[Symbol.iterator]()
    let current: IteratorResult<[string, Timestamped]> = iterator.next()

    while (deadline.timeRemaining() > 0 && !current.done) {
      const [key, { timestamp }] = current.value

      if (timestamp <= expired) {
        cache.delete(key)
      }

      current = iterator.next()
    }
  }

  function scheduleNextClear() {
    cacheClearDisposable.dispose()
    cacheClearDisposable = whenIdle(clearAllOldResponses, timer)
  }

  function clearOldResponse(key: string) {
    const now = timer.currentTime()
    const expired = now - expiration
    const response = cache.get(key)!

    if (response.timestamp <= expired) {
      cache.delete(key)
    }
  }

  function cacheResponseByKey(key: string) {
    return (response: HttpResponse) => {
      if (isValidStatus(response)) {
        cache.set(key, { timestamp: timer.currentTime(), response })
      }

      scheduleNextClear()

      return response
    }
  }

  function http(url: string, options: HttpOptions, callbacks: HttpCallbacks): Disposable {
    const { success } = callbacks
    const key = getCacheKey(url, options)
    const isCacheable = methodsToCache.includes(options.method || 'GET')
    const lastResponse = cache.get(key)

    if (isCacheable && lastResponse) {
      clearOldResponse(key)

      return timer.delay(() => success(lastResponse.response), 0)
    }

    return env.http(url, options, {
      ...callbacks,
      success: isCacheable ? pipe(cacheResponseByKey(key), success) : success,
    })
  }

  return {
    http,
  }
}

function defaultCacheKey(url: string, _: HttpOptions): string {
  return url
}
