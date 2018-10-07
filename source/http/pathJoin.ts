import { isString } from '../logic'

const DUPLICATE_PATH_SEPARATOR_REGEX = /\/{2,}/g
const PATH_SEPARATOR = `/`

export function pathJoin(paths: Array<string | undefined | null | void | boolean>): string {
  return `/${paths.filter(isString).join(PATH_SEPARATOR)}`.replace(
    DUPLICATE_PATH_SEPARATOR_REGEX,
    PATH_SEPARATOR,
  )
}
