import { curry } from '@typed/lambda'

export const toggleOrSet = curry(
  (bool: boolean | undefined, toggleableBoolean: boolean): boolean =>
    bool === void 0 ? !toggleableBoolean : bool,
) as {
  (bool: boolean | undefined, toggleableBoolean: boolean): boolean
  (bool: boolean | undefined): (toggleableBoolean: boolean) => boolean
}
