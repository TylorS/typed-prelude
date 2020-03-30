import { KEY_SEPARATOR } from './constants'

export const createKey = (prefix: string, name: string) => `${prefix}${KEY_SEPARATOR}${name}`
