import * as CSS from 'csstype'

export interface NestedCssProperties extends Readonly<CssProperties> {
  readonly $nest?: NestedCSSSelectors
}

export interface CssProperties
  extends CSS.StandardPropertiesFallback<number | string>,
    CSS.SvgPropertiesFallback<number | string>,
    CSS.VendorPropertiesHyphenFallback<number | string>,
    CSS.ObsoletePropertiesFallback<number | string> {}

export interface NestedCSSSelectors {
  /** State selector */
  '&:active'?: NestedCssProperties
  '&:any'?: NestedCssProperties
  '&:checked'?: NestedCssProperties
  '&:default'?: NestedCssProperties
  '&:disabled'?: NestedCssProperties
  '&:empty'?: NestedCssProperties
  '&:enabled'?: NestedCssProperties
  '&:first'?: NestedCssProperties
  '&:first-child'?: NestedCssProperties
  '&:first-of-type'?: NestedCssProperties
  '&:fullscreen'?: NestedCssProperties
  '&:focus'?: NestedCssProperties
  '&:hover'?: NestedCssProperties
  '&:indeterminate'?: NestedCssProperties
  '&:in-range'?: NestedCssProperties
  '&:invalid'?: NestedCssProperties
  '&:last-child'?: NestedCssProperties
  '&:last-of-type'?: NestedCssProperties
  '&:left'?: NestedCssProperties
  '&:link'?: NestedCssProperties
  '&:only-child'?: NestedCssProperties
  '&:only-of-type'?: NestedCssProperties
  '&:optional'?: NestedCssProperties
  '&:out-of-range'?: NestedCssProperties
  '&:read-only'?: NestedCssProperties
  '&:read-write'?: NestedCssProperties
  '&:required'?: NestedCssProperties
  '&:right'?: NestedCssProperties
  '&:root'?: NestedCssProperties
  '&:scope'?: NestedCssProperties
  '&:target'?: NestedCssProperties
  '&:valid'?: NestedCssProperties
  '&:visited'?: NestedCssProperties

  /**
   * Pseudo-elements
   * https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements
   */
  '&::after'?: NestedCssProperties
  '&::before'?: NestedCssProperties
  '&::first-letter'?: NestedCssProperties
  '&::first-line'?: NestedCssProperties
  '&::selection'?: NestedCssProperties
  '&::backdrop'?: NestedCssProperties
  '&::placeholder'?: NestedCssProperties
  '&::marker'?: NestedCssProperties
  '&::spelling-error'?: NestedCssProperties
  '&::grammar-error'?: NestedCssProperties

  /**
   * Also cater for any other nested query you want
   */
  [selector: string]: NestedCssProperties | undefined
}
