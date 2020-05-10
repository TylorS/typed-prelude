import * as CSS from 'csstype'

export interface NestedCssProperties extends CssProperties {
  readonly $nest?: {
    readonly [selector: string]: CssProperties
  }
}

export interface CssProperties
  extends CSS.StandardPropertiesFallback<number | string>,
    CSS.SvgPropertiesFallback<number | string>,
    CSS.VendorPropertiesHyphenFallback<number | string>,
    CSS.ObsoletePropertiesFallback<number | string> {}
