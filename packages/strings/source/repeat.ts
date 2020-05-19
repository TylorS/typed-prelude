import { curry, Curry2 } from '@typed/lambda'

export const repeat: Curry2<number, string, string> = curry((n: number, str: string) =>
  str.repeat(n),
)
