import { isString } from '@typed/logic'
import { ClassName, GetClassNames } from '../model'

const CLASS_NAME_SEPARATOR = ' '

export const classNames: GetClassNames = (...classNames) =>
  classNames.filter(isString).sort().join(CLASS_NAME_SEPARATOR) as ClassName
