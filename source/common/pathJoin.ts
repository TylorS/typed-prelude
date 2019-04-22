import { isNewType, NewType } from '@typed/new-type'

const DUPLICATE_PATH_SEPARATOR_REGEX = /\/{2,}/g
const PATH_SEPARATOR = `/`

const isString = (x: any) => typeof x === 'string'

export type Path = NewType<string, 'Path'>

/**
 *
 * @param paths :: string[] A list of paths to join together
 * @param trailingSlash :: boolean whether or not to append a trailing slash
 */
export function pathJoin(
  paths: ReadonlyArray<string | Path | undefined | null | void | boolean>,
  trailingSlash: boolean = false,
): Path {
  const path = `/${paths.filter(isString).join(PATH_SEPARATOR)}`.replace(
    DUPLICATE_PATH_SEPARATOR_REGEX,
    PATH_SEPARATOR,
  )

  return (!trailingSlash || path[path.length - 1] === '/' ? path : path + '/') as Path
}

export const isPath = isNewType<Path>((str: string) => str.startsWith('/'))
