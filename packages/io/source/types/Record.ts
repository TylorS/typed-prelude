import { mapToList } from '@typed/objects'
import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Props } from './helpers'
import { Type } from './Type'

export const Record = Type.fromGuard(G.Record, `Record<unknown, unknown>`)

export const record = <A extends Props>(
  props: A,
  name: string = getDefaultRecordExpected(props),
  expected: string = name,
): Type<
  { readonly [K in keyof A]: Type.Of<A[K]> },
  { readonly [K in keyof A]: Type.Encoding<A[K]> }
> => {
  const g = G.record(props)
  const d = D.record(props, expected)
  const e = E.record(props)

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as Type<
    { readonly [K in keyof A]: Type.Of<A[K]> },
    { readonly [K in keyof A]: Type.Encoding<A[K]> }
  >
}

function getDefaultRecordExpected<A extends Readonly<Record<PropertyKey, Type>>>(
  decoders: A,
): string {
  return `{${mapToList((key, value) => `"${key.toString()}": ${value.expected}`, decoders).join(
    `,`,
  )}}`
}
