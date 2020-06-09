import { get } from '@typed/effects'
import { describe, given } from '@typed/test'
import { AnimationName, Css } from '../model'
import { getCss } from './getCss'
import { it } from './test-helpers'
import { useKeyFrames } from './useKeyFrames'

export const test = describe(`useKeyFrames`, [
  given(`KeyFrames`, [
    it(`returns an AnimationName`, function* ({ equal }) {
      const { rules } = yield* get()
      const animationName = yield* useKeyFrames({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      })

      equal('ta41ebc' as AnimationName, animationName)
      equal('@keyframes ta41ebc{from{opacity:0}to{opacity:1}}' as Css, getCss(rules))
    }),
  ]),
])
