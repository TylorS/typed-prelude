import { ascend } from '@typed/list'
import { Css, GetCss } from '../model'

const isMediaQuery = (css: Css) => css.startsWith('@')

export const getCss: GetCss = (rules) =>
  Array.from(rules.values())
    .map(([, css]) => css)
    .sort(sortRules)
    .reduce((s, css) => (s + css) as Css, '' as Css)

const sortRules = (a: Css, b: Css) => {
  const aIsMediaQuery = isMediaQuery(a)
  const bIsMediaQuery = isMediaQuery(b)

  if (aIsMediaQuery && !bIsMediaQuery) {
    return 1
  }

  if (bIsMediaQuery && !aIsMediaQuery) {
    return -1
  }

  return ascend((x: Css) => x)(a, b)
}
