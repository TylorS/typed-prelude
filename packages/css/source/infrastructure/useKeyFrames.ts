import { CryptoEnv, CryptoFailure } from '@typed/crypto'
import { get } from '@typed/effects'
import { HookEnv, useMemo, useMemoEffect } from '@typed/hooks'
import { ascend } from '@typed/list'
import { isNotUndefined } from '@typed/logic'
import { AnimationName, Css, CssProperties, GenerateAnimationName, KeyFrame } from '../model'
import { CssEnv } from './CssEnv'
import { generateCssHash, shouldNotAddPixels, toArray, toPx } from './helpers'

export const useKeyFrames: GenerateAnimationName<
  CssEnv & HookEnv & CryptoEnv & CryptoFailure
> = function* (keyFrames) {
  const cssProperties = yield* useMemo(keyFramesToCssProperties, [keyFrames])
  const animationName = yield* useMemoEffect(
    function* (props) {
      const name = (yield* generateCssHash(props)) as AnimationName
      const ruleKey = `@keyframes ${name}`
      const { rules } = yield* get()

      if (!rules.has(ruleKey)) {
        rules.set(ruleKey, [name, `${ruleKey}${props}` as Css])
      }

      return name
    },
    [cssProperties],
  )

  return animationName
}

function keyFramesToCssProperties(keyFrames: KeyFrame): string {
  const entries = Object.entries(keyFrames).sort(
    ascend((x: [string, CssProperties | undefined]) => x[0]),
  )
  const keyFrameProperties = entries.flatMap(([key, cssProperties]) =>
    cssProperties
      ? [
          `${key}{${Object.entries(cssProperties)
            .sort(ascend((x: [string, CssProperties]) => x[0]))
            .reduce(
              (a, [b]) => a.concat([getPropertiesString(cssProperties, b as keyof CssProperties)]),
              [] as string[],
            )
            .join(';')}}`,
        ]
      : [],
  )

  console.log(keyFrameProperties)

  return `{${keyFrameProperties.reduce((a, b) => a + b, '')}}`
}

function getPropertiesString(properties: CssProperties, key: keyof CssProperties): string {
  const values = toArray(properties[key]).filter(isNotUndefined).reverse()
  const css = values.reduce(
    (acc, value) => acc.concat(`${key}:${shouldNotAddPixels(key) ? value : toPx(value)}`),
    [] as readonly string[],
  )

  return `${css.join(`;`)}`
}
