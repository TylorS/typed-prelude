import { Href } from '../history'
import { pathJoin } from '../http'
import { Maybe, Nothing } from '../maybe'
import { Param, pathParts, pathToRegex } from './pathToRegex'

export interface Route<Params extends {} = {}> {
  readonly route: string | RegExp
  readonly match: (href: Href) => Maybe<Params>
  readonly createHref: (params: Params) => Maybe<Href>
}

export function createRoute<Params extends Record<string, any>>(
  route: string | RegExp,
): Route<Params> {
  const { regex, params } = pathToRegex(route)
  const parts = pathParts(route)

  return {
    route,
    match: (href: Href): Maybe<Params> => {
      const matches = regex.exec(href)

      if (!matches) {
        return Nothing
      }

      return Maybe.of(findParams(params, {}, matches) as Params)
    },
    createHref: (parameters: Params): Maybe<Href> => {
      const usableParts = parts.slice()

      for (const param of params) {
        const value = parameters[param.name]

        console.log(usableParts, param, value)

        if (value && new RegExp(param.pattern).test(String(value))) {
          usableParts[param.part] = String(value)
        } else {
          if (param.required) {
            return Nothing
          } else {
            usableParts[param.part] = ''
          }
        }
      }

      return Maybe.of(pathJoin(usableParts))
    },
  }
}

function findParams(params: Param[], parameters: Record<string, any>, matches: RegExpExecArray) {
  for (let i = 0; i < params.length; ++i) {
    const { name, pattern } = params[i]

    const paramMatches = new RegExp(pattern).exec(matches[i + 1])

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
