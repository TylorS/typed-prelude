import { mockStorage } from './mockStorage'
import { wrapStorage } from './wrapStorage'

export const sessionStorage = wrapStorage(
  typeof window === 'undefined' || typeof window.sessionStorage === 'undefined'
    ? mockStorage()
    : window.sessionStorage,
)
