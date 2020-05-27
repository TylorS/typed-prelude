import { hasOwnProperty, keysOf } from '@typed/objects'
import { Guard, TypeOf } from './Guard'
import { Record } from './Record'

export function partial<R extends Readonly<Record<PropertyKey, Guard<never>>>>(
  props: R,
): Guard<{ readonly [K in keyof R]?: TypeOf<R[K]> }> {
  return {
    is: (a): a is { readonly [K in keyof R]?: TypeOf<R[K]> } => {
      if (Record.is(a)) {
        const propsToCheck = keysOf(a).filter((k) => hasOwnProperty(k, props)) as (keyof R)[]

        return propsToCheck.every((k) => props[k].is(a[k]))
      }

      return false
    },
  }
}
