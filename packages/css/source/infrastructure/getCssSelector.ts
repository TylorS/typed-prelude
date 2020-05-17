import { ClassName, CssSelector } from '../model'

const classNamePrefix = '.'
const classNameSeparator = ' '

export const getCssSelector = (className: ClassName): CssSelector =>
  (classNamePrefix + className.split(classNameSeparator).join(classNamePrefix)) as CssSelector
