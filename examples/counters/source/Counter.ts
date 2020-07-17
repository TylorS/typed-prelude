import { HookEffects, InitialState, useState } from '@typed/hooks'
import { html, text, VNode } from '@typed/html'
import { decrement, increment } from '@typed/math'

export function* Counter(): HookEffects<unknown, VNode> {
  const [getCount, updateCount] = yield* useState(InitialState.of(0))
  const count = yield* getCount()

  console.log(count)

  return html('div', null, [
    html(
      'button',
      {
        on: {
          *click() {
            yield* updateCount(increment)
          },
        },
      },
      [text('+')],
    ),
    html('span', {}, [text(String(count))]),
    html(
      'button',
      {
        on: {
          *click() {
            yield* updateCount(decrement)
          },
        },
      },
      [text('-')],
    ),
  ])
}
