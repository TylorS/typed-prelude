import { or } from '@typed/logic'

export const isArgumentFlag: (arg: string) => boolean = or(isNamedFlag, isAliasFlag)

export function isNamedFlag(arg: string): boolean {
  return arg.startsWith('--')
}

export function isAliasFlag(arg: string): boolean {
  return arg.startsWith('-')
}
