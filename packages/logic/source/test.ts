import { curry, Curry2 } from '@typed/lambda'

export const test: Curry2<RegExp, string, boolean> = curry((regex: RegExp, str: string): boolean =>
  regex.test(str),
)
