import { curry } from '../../lambda'
import { isJust } from '../../maybe'
import { indexOf } from '../indexOf'

export const contains: {
  <A>(value: A, list: A): boolean
  <A>(value: A): (list: A) => boolean
} = curry((value, list) => isJust(indexOf(value, list)))
