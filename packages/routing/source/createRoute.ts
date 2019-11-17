import { Path, pathJoin } from '@typed/history'
import { Maybe, Nothing } from '@typed/maybe'
import { compile, match } from 'path-to-regexp'
import { Route } from './types'

export type RouteOptions = {
  readonly encode?: (str: string) => string
  readonly decode?: (str: string) => string
}

export function createRoute<A extends Record<string, string | number> = {}>(
  path: string,
  { encode = encodeURIComponent, decode = decodeURIComponent }: RouteOptions = {},
): Route<A> {
  const getPath = compile<A>(path, { encode })
  const getMatch = match<A>(path, { decode })

  return {
    path: pathJoin(['/', path]),
    match: (href: Path): Maybe<A> => {
      const match = getMatch(href)

      return !match ? Nothing : Maybe.of(match.params)
    },
    createPath: (parameters: A, trailingSlash: boolean = false): Maybe<Path> => {
      return Maybe.of(pathJoin([getPath(parameters)], trailingSlash))
    },
  }
}
