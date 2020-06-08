import { mapToList } from '@typed/objects'
import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Props } from './helpers'
import { Type } from './Type'

export interface RecordType<A extends Props>
  extends Type<
    { readonly [K in keyof A]: Type.Of<A[K]> },
    { readonly [K in keyof A]: Type.Encoding<A[K]> }
  > {
  readonly properties: A
}

export const record = <A extends Props>(
  properties: A,
  name: string = getDefaultRecordName(properties),
  expected: string = getDefaultRecordExpected(properties),
): RecordType<A> => {
  const g = G.record(properties)
  const d = D.record(properties, expected)
  const e = E.record(properties)

  return {
    ...g,
    ...d,
    ...e,
    name,
    properties,
  } as RecordType<A>
}

function getDefaultRecordName<A extends Readonly<Record<PropertyKey, Type>>>(decoders: A): string {
  return `{${mapToList((key, value) => `"${key.toString()}": ${value.name}`, decoders).join(`,`)}}`
}

function getDefaultRecordExpected<A extends Readonly<Record<PropertyKey, Type>>>(
  decoders: A,
): string {
  return `{${mapToList((key, value) => `"${key.toString()}": ${value.expected}`, decoders).join(
    `,`,
  )}}`
}
