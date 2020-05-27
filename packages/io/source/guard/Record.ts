import { isRecord } from '@typed/logic'
import { hasOwnProperty, keysOf } from '@typed/objects'
import { Guard, TypeOf } from './Guard'

export const Record: Guard<Readonly<Record<PropertyKey, unknown>>> = Guard.is(isRecord)

export const record = <R extends Readonly<Record<PropertyKey, Guard<never>>>>(
  props: R,
): Guard<{ readonly [K in keyof R]: TypeOf<R[K]> }> => {
  return {
    is: (u): u is { readonly [K in keyof R]: TypeOf<R[K]> } => {
      if (!Record.is(u)) {
        return false
      }

      for (const k of keysOf(props)) {
        if (!hasOwnProperty(k, props) || !props[k as keyof R].is((u as R)[k as keyof R])) {
          return false
        }
      }

      return true
    },
  }
}
