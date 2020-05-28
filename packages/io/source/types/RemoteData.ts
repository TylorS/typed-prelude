import { RemoteData } from '@typed/remote-data'
import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Type } from './Type'

const _RemoteData: Type<RemoteData<unknown, unknown>> = Type.fromGuard(
  G.RemoteData,
  `RemoteData<unknown, unknown>`,
)

export { _RemoteData as RemoteData }

export const remoteData = <L extends Type, R extends Type>(
  l: L,
  r: R,
  name: string = `RemoteData<${l.name}, ${r.name}>`,
): Type<RemoteData<Type.Of<L>, Type.Of<R>>> => {
  const g = G.remoteData(l, r)
  const d = D.remoteData(l, r)
  const e = E.Encoder.id()

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as Type<RemoteData<Type.Of<L>, Type.Of<R>>>
}
