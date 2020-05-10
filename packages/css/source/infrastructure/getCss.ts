import { Css, GetCss } from '../model'

export const getCss: GetCss = (rules) =>
  Array.from(rules.values())
    .map(([, css]) => css)
    .sort()
    .reduce((s, css) => (s + css) as Css, '' as Css)
