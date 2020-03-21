import { get } from '@typed/effects'
import { render, Renderable } from 'lighterhtml'
import { RenderEnv } from '../domain/model'

export function* patch(node: Renderable) {
  const { rootElement } = yield* get<RenderEnv>()

  return render(rootElement, node)
}
