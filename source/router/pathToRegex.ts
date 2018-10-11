const rePartsMatcher = /\.\w+|\.\:\w+|\/+\w+|\/\:\w+({.+?})?|\:\w+({.+?})?|\(.+?\)/g
const rePartMatcher = /\:?\w+|{.+?}/g
const OPTIONAL_REGEX = /^(\/)?\?/

// Adapted from https://github.com/nathanfaucett/js-path_to_regexp

export type Param = {
  name: string
  pattern: string
  required: boolean
  part: number
}

export function pathToRegex(path: string | RegExp): { regex: RegExp; params: Param[] } {
  path = path + ''
  const parts = pathParts(path)
  const length = parts.length - 1
  let subRegexp
  let subParts

  const params = []

  let pattern = '^'

  let i = -1
  while (i++ < length) {
    let part = parts[i]

    if (part.length !== 0) {
      if (part[0] === '(') {
        if (part[1] === '/' || part[1] === '.') {
          pattern += '(?:\\' + part[1]
        }
        subParts = part.match(rePartMatcher) as RegExpExecArray
        part = subParts[0]

        if (part[0] === ':') {
          subRegexp = subParts[1]
          subRegexp = subRegexp ? subRegexp.slice(1, -1) : '[a-zA-Z0-9-_]+'
          pattern += '(' + subRegexp + '?)'
          params[params.length] = {
            name: part.slice(1),
            pattern: subRegexp,
            required: false,
            part: i,
          }
        } else {
          pattern += part
        }

        pattern += ')?'
      } else {
        if (part[0] === '/' || part[0] === '.') {
          pattern += '\\' + part[0] + '+'
        }
        subParts = part.match(rePartMatcher) as RegExpExecArray
        part = subParts[0]
        const optionalIndex = (path as string).indexOf(part) + part.length

        if (part[0] === ':') {
          subRegexp = subParts[1]
          subRegexp = subRegexp ? subRegexp.slice(1, -1) : '[a-zA-Z0-9-_]+'
          pattern += '(' + subRegexp + ')'
          params[params.length] = {
            name: part.slice(1),
            pattern: subRegexp,
            required: !OPTIONAL_REGEX.test(path.slice(optionalIndex, optionalIndex + 1)),
            part: i,
          }
        } else {
          pattern += part
        }
      }
    }
  }

  pattern += '(?=\\/|$)'

  const regex = new RegExp(pattern, 'i')

  return { regex, params }
}

export function pathParts(path: string | RegExp) {
  return (path + '').match(rePartsMatcher) || []
}
