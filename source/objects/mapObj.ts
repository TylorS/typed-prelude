import { curry } from '../lambda'

export const mapObj: {
  <A, B, C extends Record<PropertyKey, A>>(
    fn: <K extends keyof C>(key: K, value: C[K]) => B,
    obj: C,
  ): { [K in keyof C]: B }

  <A, B, C extends Record<PropertyKey, A>>(fn: <K extends keyof C>(key: K, value: C[K]) => B): (
    obj: C,
  ) => { [K in keyof C]: B }
} = curry(__mapObj)

function __mapObj<A, B, C extends Record<PropertyKey, A>>(
  fn: <K extends keyof C>(key: K, value: C[K]) => B,
  obj: C,
): { [K in keyof C]: B } {
  const newObj = {} as { [K in keyof C]: B }

  // tslint:disable-next-line:forin
  for (const key in obj) {
    newObj[key] = fn(key, obj[key])
  }

  return newObj
}
