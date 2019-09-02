import { IO } from '@typed/lambda'
import { Channel } from './types'

/**
 * Creates a Channel that will lazily retrieve the default value
 * upon first usage. Great for context dependent values like window or document.
 * @param getDefaultValue :: () => A
 */
export function createLazyChannel<A>(getDefaultValue: IO<A>): Channel<A> {
  let defaultValue: A
  let called = false

  return {
    get defaultValue(): A {
      if (!called) {
        called = true
        defaultValue = getDefaultValue()
      }

      return defaultValue
    },
  }
}
