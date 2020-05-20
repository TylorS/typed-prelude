import { Maybe } from '@typed/maybe'

export const exec = (regex: RegExp, str: string) => Maybe.of(regex.exec(str))
