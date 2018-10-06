const HREF_REGEX = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/

/**
 * ParsedHref JSON data structure
 * @name ParsedHref
 * @type
 */
export type ParsedHref = {
  readonly href: string
  readonly protocol: string
  readonly host: string
  readonly userInfo: string
  readonly username: string
  readonly password: string
  readonly hostname: string
  readonly port: string
  readonly relative: string
  readonly pathname: string
  readonly directory: string
  readonly file: string
  readonly search: string
  readonly hash: string
}

/**
 * Parses an href into JSON.
 * @name parseHref(href: string): ParsedHref
 */
export function parseHref(href: string): ParsedHref {
  const matches = HREF_REGEX.exec(href) as RegExpExecArray

  const parsedHref = {} as Record<keyof ParsedHref, string>

  for (let i = 0; i < keyCount; ++i) {
    const key = keys[i]
    let value = matches[i] || ''

    if (key === 'search' && value) {
      value = '?' + value
    }
    if (key === 'protocol' && value && !value.endsWith(':')) {
      value = value + ':'
    }

    if (key === 'hash') {
      value = '#' + value
    }

    parsedHref[key] = value
  }

  return parsedHref
}

const keys: ReadonlyArray<keyof ParsedHref> = [
  'href',
  'protocol',
  'host',
  'userInfo',
  'username',
  'password',
  'hostname',
  'port',
  'relative',
  'pathname',
  'directory',
  'file',
  'search',
  'hash',
]

const keyCount = keys.length
