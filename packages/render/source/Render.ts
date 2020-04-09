import { Effects } from '@typed/effects'
import { Resume } from '@typed/env'

export interface RenderEnv<A, B> {
  readonly render: (value: A) => Resume<B>
}

export function* render<A, B>(renderable: A): Effects<RenderEnv<A, B>, B> {
  return yield (c) => c.render(renderable)
}
