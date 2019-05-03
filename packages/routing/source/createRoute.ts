import { Path, pathJoin } from '@typed/history'
import { Maybe, Nothing } from '@typed/maybe'
import { Param, pathParts, pathToRegex } from './pathToRegex'
import { Route } from './types'

export function createRoute<A extends Record<string, string | number> = {}>(
  path: string,
): Route<A> {
  const { regex, params } = pathToRegex(path)
  const parts = pathParts(path)

  return {
    path: pathJoin(['/', path]),
    match: (href: Path): Maybe<A> => {
      const matches = regex.exec(href)

      return matches ? Maybe.of(findParams<A>(params, {}, matches)) : Nothing
    },
    createPath: (parameters: A, trailingSlash: boolean = false): Maybe<Path> => {
      if (params.length === 0) {
        return Maybe.of(pathJoin(parts, trailingSlash))
      }

      const usableParts = parts.slice()

      for (const { pattern, part, required, name } of params) {
        const value = parameters[name]
        const stringValue = value + ''

        if (value && pattern.test(stringValue)) {
          usableParts[part] = stringValue
        } else if (required) {
          return Nothing
        } else {
          usableParts[part] = ''
        }
      }

      return Maybe.of(pathJoin(usableParts, trailingSlash))
    },
  }
}

function findParams<A>(
  params: Param[],
  parameters: Record<string, any>,
  matches: RegExpExecArray,
): A {
  for (let i = 0; i < params.length; ++i) {
    const { name, pattern } = params[i]

    const paramMatches = pattern.exec(matches[i + 1])

    if (paramMatches) {
      parameters[name] = parseParam(paramMatches[0])
    }
  }

  return parameters as A
}

function parseParam(param: any): any {
  try {
    return JSON.parse(param)
  } catch {
    return param
  }
}
