const QUERYSTRING_REGEX = /(?:^|&)([^&=]*)=?([^&]*)/g

/**
 * Parses a Location's query string into an object of key/value pairs.
 * @name parseQueries<Queries extends Record<string, string>>(location: Location): Queries
 * @example
 * import { createEnv, pushUrl, parseQueries } from '@typed/history'
 *
 * const { history, location } = createEnv()
 *
 * console.log(parseQueries(location)) // logs => {}
 *
 * pushUrl('/?q=hello&lang=en', history)
 *
 * console.log(parseQueries(location)) // logs => { q: 'hello', lang: 'en' }
 */
export function parseQueries<Queries extends Record<string, string> = {}>(
  location: Location,
): Readonly<Queries> {
  const { search } = location
  const queries = {} as Queries

  if (!search) {
    return queries
  }

  search.substring(1).replace(QUERYSTRING_REGEX, (_: string, name: string, value: string) => {
    if (name) {
      queries[name] = value
    }

    return value
  })

  return queries
}
