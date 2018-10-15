import { pathJoin } from '../common/pathJoin'
import { Href } from '../history'
import { Maybe, Nothing } from '../maybe'
import { Param, pathParts, pathToRegex } from './pathToRegex'
import { Route } from './types'

export function createRoute<A extends Record<string, any>>(path: string): Route<A> {
  const { regex, params } = pathToRegex(path)
  const parts = pathParts(path)

  return {
    path,
    match: (href: Href): Maybe<A> => {
      const matches = regex.exec(href)

      if (!matches) {
        return Nothing
      }

      return Maybe.of(findParams(params, {}, matches) as A)
    },
    createPath: (parameters: A, trailingSlash: boolean = false): Href => {
      if (params.length === 0) {
        return pathJoin(parts, trailingSlash)
      }

      const usableParts = parts.slice()

      for (const { pattern, part, name } of params) {
        const value = parameters[name]
        const stringValue = String(value)

        if (value && pattern.test(stringValue)) {
          usableParts[part] = stringValue
        } else {
          usableParts[part] = ''
        }
      }

      return pathJoin(usableParts, trailingSlash)
    },
  }
}

function findParams(params: Param[], parameters: Record<string, any>, matches: RegExpExecArray) {
  for (let i = 0; i < params.length; ++i) {
    const { name, pattern } = params[i]

    const paramMatches = pattern.exec(matches[i + 1])

    if (paramMatches) {
      parameters[name] = parseParam(paramMatches[0])
    }
  }

  return parameters
}

function parseParam(param: any): any {
  try {
    return JSON.parse(param)
  } catch {
    return param
  }
}
