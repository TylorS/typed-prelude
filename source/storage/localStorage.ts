import { mockStorage } from './mockStorage'
import { wrapStorage } from './wrapStorage'

export const localStorage = wrapStorage(
  typeof window === 'undefined' || typeof window.localStorage === 'undefined'
    ? mockStorage()
    : window.localStorage,
)
