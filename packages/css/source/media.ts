import { isNumber } from '@typed/logic'
import { NestedCssProperties } from './model'

export type MediaQuery = {
  readonly type?: 'screen' | 'print' | 'all'
  readonly orientation?: 'landscape' | 'portrait'
  readonly minWidth?: number | string
  readonly maxWidth?: number | string
  readonly minHeight?: number | string
  readonly maxHeight?: number | string
}

const toPx = (sOrN: string | number) => (isNumber(sOrN) ? `${sOrN}px` : sOrN)

export const media = (query: MediaQuery, properties: NestedCssProperties): NestedCssProperties => ({
  $nest: { [toSelector(query)]: properties },
})

function toSelector(query: MediaQuery): string {
  const selector = `@media ` + query.type ?? ``
  const parts: string[] = []

  if (query.orientation) parts.push(`(orientation: ${query.orientation})`)
  if (query.minWidth) parts.push(`(min-width: ${toPx(query.minWidth)})`)
  if (query.maxWidth) parts.push(`(max-width: ${toPx(query.maxWidth)})`)
  if (query.minHeight) parts.push(`(min-height: ${toPx(query.minHeight)})`)
  if (query.maxHeight) parts.push(`(max-height: ${toPx(query.maxHeight)})`)

  return selector + parts.join(' and ')
}
