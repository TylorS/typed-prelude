import { curry } from '../lambda'

export const toggleOrSet: {
  (bool: boolean | undefined, toggleableBoolean: boolean): boolean
  (bool: boolean | undefined): (toggleableBoolean: boolean) => boolean
} = curry(
  (bool: boolean | undefined, toggleableBoolean: boolean): boolean =>
    typeof bool === 'boolean' ? bool : !toggleableBoolean,
)
