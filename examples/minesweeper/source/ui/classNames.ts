import { isString } from '@typed/logic'

const EMPTY_SPACE = ' '

export const classNames = (...names: Array<string | boolean | null | undefined | void>) =>
  names.filter(isString).join(EMPTY_SPACE)
