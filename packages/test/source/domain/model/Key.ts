import * as t from '@typed/io'
import { Uuid } from '@typed/uuid'

export type Key<A> = Uuid & { readonly __keyFor__: A }
export const Key = <A>(keyName: string): t.Type<Key<A>> =>
  t.refinement(t.Uuid, (_): _ is Key<A> => true, keyName)
