import { RemoteData } from '@typed/remote-data'
import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Any, Type } from './Type'

export interface RemoteDataType<L extends Type, R extends Type>
  extends Type<RemoteData<Type.Of<L>, Type.Of<R>>> {
  readonly left: L
  readonly right: R
}

export const remoteData = <L extends Type, R extends Type>(
  left: L,
  right: R,
  name: string = `RemoteData<${left.name}, ${right.name}>`,
): RemoteDataType<L, R> => {
  const g = G.remoteData(left, right)
  const d = D.remoteData(left, right)
  const e = E.Encoder.id()

  return {
    ...g,
    ...d,
    ...e,
    name,
    left,
    right,
  } as RemoteDataType<L, R>
}

const _RemoteData: RemoteDataType<Any, Any> = remoteData(Any, Any)

export { _RemoteData as RemoteData }
