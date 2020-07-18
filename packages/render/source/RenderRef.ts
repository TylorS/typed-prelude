import { Ref, SetRef } from '@typed/hooks'

export type RenderRef<A> = {
  readonly setRef: SetRef<A>
  readonly ref: Ref<A>
}
