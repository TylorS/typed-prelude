import { clone as _clone } from '../common/clone'

export const clone = <A>(value: A): A => _clone(value, [], [], true)
